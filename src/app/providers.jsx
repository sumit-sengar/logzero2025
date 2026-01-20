// src/app/providers.jsx
"use client";

import { ModalProvider } from "@/context/ModalContext";
import LztProvider from "@/context/Lztcontext";
import LeadFormModal from "@/components/LeadFormModal";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <ModalProvider>
      <LztProvider>{children}</LztProvider>
      <Toaster position="top-center" reverseOrder={true} />
      <LeadFormModal />
    </ModalProvider>
  );
}