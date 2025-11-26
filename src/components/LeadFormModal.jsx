"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  Briefcase,
  FileText,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function LeadFormModal() {
  const { open, payload, closeModal } = useModal();
  const servicesFromPayload = payload?.servicesOptions || null;

  const dateInputRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState(""); // Detailed error message

  const defaultServices = useMemo(
    () => [
      "Web Development",
      "Mobile App Development",
      "DevOps & Cloud Management",
      "Server & Infrastructure Support",
      "Virtual Resource Management",
      "Data Management & Analytics",
      "UI/UX Design",
      "Digital Marketing",
      "Other (please specify)",
    ],
    []
  );

  const services =
    servicesFromPayload && servicesFromPayload.length > 0
      ? servicesFromPayload
      : defaultServices;

  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    phoneNumber: "",
    industry: "",
    website: "",
    service: "",
    otherService: "",
    projectDescription: "",
    consultationDateTime: "",
    hearAboutUs: "",
  });

  useEffect(() => {
    if (!open) {
      setFormData({
        fullName: "",
        Email: "",
        phoneNumber: "",
        industry: "",
        website: "",
        service: "",
        otherService: "",
        projectDescription: "",
        consultationDateTime: "",
        hearAboutUs: "",
      });
    }
  }, [open]);

  const minDateTime = useMemo(() => {
    const dt = new Date();

    dt.setDate(dt.getDate() + 1); // Advance day
    dt.setHours(0, 0, 0, 0); // Set time to 00:00:00

    const yyyy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, "0");
    const dd = String(dt.getDate()).padStart(2, "0");
    const hh = String(dt.getHours()).padStart(2, "0");
    const min = String(dt.getMinutes()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
  }, [open]);

  if (!open) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "consultationDateTime") {
      const date = new Date(value);
      const day = date.getDay();

      if (day === 0 || day === 6) {
        alert("Weekends are not available. Please choose a weekday.");
        return;
      }
    }

    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.Email ||
      !formData.phoneNumber ||
      !formData.service ||
      !formData.consultationDateTime ||
      !formData.hearAboutUs
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const API_URL =
      "https://webapi.logzerotechnologies.com/api/v1/consultation/create";

    const dataToSend = {
      email: formData.Email,
      full_name: formData.fullName,
      phone_number: formData.phoneNumber,
      industry: formData.industry,
      website: formData.website,
      service: formData.service,
      service_specify: "",
      pref_time: formData.consultationDateTime,
      project_desc: formData.projectDescription,
      origin: formData.hearAboutUs,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      const responseData = await response.json();

      // console.log(response, responseData);
      if (response.ok) {
        setSubmissionStatus("success");
        console.log("Lead form submitted successfully!");
        closeModal();
        setFormData({
          fullName: "",
          Email: "",
          phoneNumber: "",
          industry: "",
          website: "",
          service: "",
          otherService: "",
          projectDescription: "",
          consultationDateTime: "",
          hearAboutUs: "",
        });
        alert("Your form has been submitted successfully.");
      } else {
        setSubmissionStatus("error");
        const serverError =
          responseData.message || responseData.error || "Unknown server error.";
        setErrorMessage(`Submission failed: ${serverError}`);
        console.error("API submission failed:", response.status, serverError);
      }
    } catch (err) {
      setSubmissionStatus("error");
      setErrorMessage(
        "A network error occurred. Please check your connection."
      );
      console.error("Network or fetch error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bluenew">
          <h2 className="text-lg font-semibold !text-white">
            Schedule Your Free Consultation
          </h2>
          <button
            onClick={closeModal}
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-grow bg-gray-50">
          {submissionStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              <p className="font-bold">Error! 😟</p>
              <p>
                {errorMessage ||
                  "Could not submit the form. Please try again later."}
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="subheading-3 mb-3 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                    <User className="w-4 h-3.5" />
                  </span>
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>

              <div>
                <label className="subheading-3 mb-3 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                    <Mail className="w-4 h-3.5" />
                  </span>
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@company.com"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone & Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="subheading-3 mb-2 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                    <Phone className="w-4 h-3.5" />
                  </span>
                  Phone Number <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>

              <div>
                <label className="subheading-3 mb-2 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                    <Building2 className="w-4 h-3.5" />
                  </span>
                  Industry (Optional)
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Healthcare, E-commerce"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Website */}
              <div>
                <label className="subheading-3 mb-2 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                    <Globe className="w-4 h-3.5" />
                  </span>
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://www.yourcompany.com"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>

              {/* Date/time */}
              <div>
                <label className="subheading-3 mb-2 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8  rounded-full bg-[#042c21] text-white mr-2 ">
                    <Clock className="w-4 h-3.5" />
                  </span>
                  Preferred Time for Consultation{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  ref={dateInputRef}
                  type="datetime-local"
                  name="consultationDateTime"
                  value={formData.consultationDateTime}
                  onChange={handleInputChange}
                  min={minDateTime}
                  required
                  onPointerDown={(e) => {
                    try {
                      e.currentTarget?.showPicker?.();
                    } catch (err) {}
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      try {
                        dateInputRef.current?.showPicker?.();
                      } catch (err) {}
                    }
                  }}
                  className="w-full mt-2 px-4 py-2.5 border cursor-pointer border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>
            </div>

            {/* Service select */}
            <div>
              <label className="subheading-3 mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2 ">
                  <Briefcase className="w-4 h-3.5" />
                </span>
                Which IT service are you interested in?{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full mt-2 px-4  cursor-pointer py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all bg-white"
              >
                <option value="">-- Select a service --</option>
                {services.map((s) => {
                  const optValue = typeof s === "string" ? s : String(s);
                  return (
                    <option key={optValue} value={optValue}>
                      {optValue}
                    </option>
                  );
                })}
                {!services.some((s) => /other/i.test(String(s))) && (
                  <option value="other">Other (please specify)</option>
                )}
              </select>
            </div>

            {/* Conditional other field */}
            {formData.service === "other" ||
            /other/i.test(String(formData.service)) ? (
              <div>
                <label className="subheading-3 mb-2">Please specify</label>
                <input
                  type="text"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleInputChange}
                  placeholder="Describe your required service"
                  className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all"
                />
              </div>
            ) : null}

            {/* Project description */}
            <div>
              <label className="subheading-3 mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                  <FileText className="w-4 h-3.5" />
                </span>
                Briefly describe your project or IT challenge (Optional)
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us about your requirements, challenges, or goals..."
                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all resize-none"
              />
            </div>

            {/* Hear about us */}
            <div>
              <label className="subheading-3 mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#042c21] text-white mr-2">
                  <MessageSquare className="w-4 h-3.5" />
                </span>
                How did you hear about us?{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                required
                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BC2A7] outline-none transition-all bg-white"
              >
                <option value="">-- Select an option --</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="email">Email Campaign</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || submissionStatus === "success"}
                className={`w-full bluenew  !text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-xl cursor-pointer ${
                  isSubmitting || submissionStatus === "success"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bluenew hover:bg-[#4ab096] hover:shadow-xl"
                }`}
              >
                {isSubmitting
                  ? "Submitting..."
                  : submissionStatus === "success"
                  ? "Request Sent!"
                  : "Schedule My Free Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
