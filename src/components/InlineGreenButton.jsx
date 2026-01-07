"use client";

import { useModal } from "@/context/ModalContext";
import { MoveRight, Send } from "lucide-react";
export function InlineGreenButton({
  linkurl,
  text,
  linktarget,
  MoveRighticon,
  send,
  services = [],
}) {
  const { openModal } = useModal();

  const handleClick = (e) => {
    if (services === false) return;

    e.preventDefault();
    openModal({
      servicesOptions: services,
      source: text || "Hero CTA",
    });
  };

  return (
    <a
      href={linkurl || "#"}
      target={linktarget}
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-white bg-[#1E8767] border !border-[var(--bg-blue-700)] rounded-[6px] px-[35px] xl:px-[35px] lg:px-[28px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transform hover:scale-105"
    >
      {send && <Send width={20} />}
      {text}
      {MoveRighticon && (
        <span>
          <MoveRight width={20} />
        </span>
      )}
    </a>
  );
}