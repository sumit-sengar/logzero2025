// src/app/providers.jsx
"use client";

import { ModalProvider } from "@/context/ModalContext";
import LztProvider from "@/context/Lztcontext";
import LeadFormModal from "@/components/LeadFormModal";

export default function Providers({ children }) {
  return (
    <ModalProvider>
      <LztProvider>{children}</LztProvider>
      <LeadFormModal />
    </ModalProvider>
  );
}