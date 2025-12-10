"use client";
import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";

export default function ConsultationModal() {
  const { open, closeModal } = useModal();

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[9999] ${open ? "block" : "hidden"}`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
      <div
        role="dialog"
        aria-modal="true"
        className="absolute inset-x-3 sm:inset-x-6 md:inset-x-10 top-10 bottom-10 overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bluenew text-white rounded-t-2xl ">
          <h3 className="text-xl sm:text-2xl font-semibold ">
            Schedule Your Free Consultationsdfasfafs
          </h3>
          <button onClick={closeModal} aria-label="Close">
            <X className="w-6 h-6 " />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
          className="p-6 sm:p-8 grid gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Full Name *" required />
            <input
              className="input"
              type="email"
              placeholder="Email *"
              required
            />
            <input className="input" placeholder="Phone Number *" required />
            <input className="input" placeholder="Industry *" required />
          </div>

          <input className="input " placeholder="Website (Optional)" />
          <select className="input " required defaultValue="">
            <option value="" disabled>
              -- Select a service --
            </option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>DevOps & Cloud Management</option>
            <option>Server & Infrastructure Support</option>
            <option>Virtual Resource Management</option>
            <option>Data Management & Analytics</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
            <option>Other (please specify)</option>
          </select>

          <textarea
            className="input min-h-28"
            placeholder="Briefly describe your project (Optional)"
          />
          <input className="input" type="datetime-local" step={1800} required />
          <select className="input" required defaultValue="">
            <option value="" disabled>
              -- How did you hear about us? --
            </option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Referral</option>
            <option>Other</option>
          </select>

          <button className="w-full py-4 rounded-xl bluenew text-white font-semibold   ">
            Schedule My Free Consultation
          </button>
        </form>
      </div>

      <style jsx>{`
        .input {
          @apply w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5BC2A7]/40;
        }
      `}</style>
    </div>
  );
}
