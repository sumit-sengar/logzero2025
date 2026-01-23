"use client";
import Image from "next/image";

const DEFAULT_CASE_STUDY_IMAGE = "/assets/img/health-tracker.png";

const ensureDataUrl = (base64) => {
  if (typeof base64 !== "string") return "";
  const trimmed = base64.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("data:image")
    ? trimmed
    : `data:image/jpeg;base64,${trimmed}`;
};

const resolveImageSrc = (base64, url, fallback = DEFAULT_CASE_STUDY_IMAGE) => {
  const dataUrl = ensureDataUrl(base64);
  if (dataUrl) return dataUrl;
  if (typeof url === "string" && url.trim()) return url.trim();
  return fallback;
};

export default function CaseStudyImage({
  base64,
  src,
  alt,
  width = 564,
  height = 383,
  className = "",
  fallback = DEFAULT_CASE_STUDY_IMAGE,
}) {
  const finalSrc = resolveImageSrc(base64, src, fallback);
  const isDataUrl = finalSrc.startsWith("data:");

  if (isDataUrl) {
    return (
      <img
        src={finalSrc}
        alt={alt || "Case study image"}
        width={width}
        height={height}
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <Image
      src={finalSrc}
      alt={alt || "Case study image"}
      width={width}
      height={height}
      className={className}
    />
  );
}
