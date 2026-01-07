"use client";
import { useState } from "react";

export default function BookSession() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budgetName: "",
    projectDetails: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">

         <div className="max-w-[1169px] mx-auto text-center mb-10">

        <h3 className="text-3xl  font-normal text-black">
          Still Thinking? Book a Free Strategy Session.
        </h3>
        <p className="mt-1 text-base md:text-base text-black">
          Talk to a senior strategist. No obligations, no hard sell—just insights.
        </p>
      </div>


      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">


         <div className="bg-white text-black rounded-2xl shadow-lg p-8 flex flex-col justify-between">  {/*leftside */}
          <div>
            <h2 className="text-xl font-semibold flex items-center mb-6">
              <span className="mr-2">🤝</span> Why Choose Us?
            </h2>
            <img
              src="/assets/img/whychooseus.jpg" 
              alt="Why Choose Us"
              className="rounded-lg mb-6"
            />
            <ul className="space-y-4 text-sm font-openSans">
              <li>✅ Experience That Matters – 12+ years, 200+ successful projects</li>
              <li>✅ Strategic Thinking + Technical Excellence</li>
              <li>✅ Conversion-Centric Design – UX/UI backed by data</li>
              <li>✅ Scalable Architecture – Future-proof tech stacks</li>
              <li>✅ End-to-End Project Management</li>
              <li>✅ Dedicated Success Manager for Every Client</li>
              <li>✅ Post-Launch Optimization Plans</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bluenew text-black px-6 py-3 rounded-lg shadow font-medium">
              Book Now
            </button>
            <button className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg shadow font-medium">
              Send a Brief
            </button>
          </div>
        </div>


        <div className="bg-white rounded-2xl border border-gray-200 shadow p-8">  {/*right side*/ }
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                name="company"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                name="projectType"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none bg-white"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="design">UI/UX Design</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <select
                name="budgetName"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none bg-white"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a budget range
                </option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                name="projectDetails"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#2AC9A6] outline-none"
                onChange={handleChange}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-[#2AC9A6] text-[#2AC9A6]"
              />
              <span>
                I agree to the privacy policy and consent to being contacted about my inquiry.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#2AC9A6] hover:brightness-95 text-white py-3 rounded-xl shadow font-medium"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}