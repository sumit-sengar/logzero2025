import React, { useState, useRef, useEffect } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Button from "./Button";

const RATIO_PRESETS = {
  Free: undefined,
  "1:1": 1,
  "3:2": 3 / 2,
  "4:3": 4 / 3,
  "16:9": 16 / 9,
  "21:9": 21 / 9,
  "4:5": 4 / 5,
  "2:3": 2 / 3,
  "9:16": 9 / 16,
};

function getCenteredCrop(mediaWidth, mediaHeight, aspect) {
  if (!aspect) return undefined;

  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

async function cropToBlob(img, crop, outputSize) {
  const canvas = document.createElement("canvas");
  const scaleX = img.naturalWidth / img.width;
  const scaleY = img.naturalHeight / img.height;

  const pixelWidth = Math.round(crop.width * scaleX);
  const pixelHeight = Math.round(crop.height * scaleY);

  canvas.width = outputSize?.width ?? pixelWidth;
  canvas.height = outputSize?.height ?? pixelHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    img,
    crop.x * scaleX,
    crop.y * scaleY,
    pixelWidth,
    pixelHeight,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), "image/jpeg", 0.9)
  );
}

export default function ImageUploader({
  outputSize = null,
  defaultRatio = "Free",
  onChange,
  onCancel,
}) {
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);

  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [ratioKey, setRatioKey] = useState(defaultRatio);

  const aspect = RATIO_PRESETS[ratioKey];

  useEffect(() => {
    if (!imgRef.current) return;
    const { width, height } = imgRef.current;
    setCrop(getCenteredCrop(width, height, aspect));
  }, [ratioKey, aspect]);

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    setCrop(getCenteredCrop(width, height, aspect));
  };

  const handleSave = async () => {
    if (!imgRef.current || !completedCrop) return;

    const blob = await cropToBlob(imgRef.current, completedCrop, outputSize);
    const file = new File([blob], "image.jpg", { type: "image/jpeg" });

    onChange?.(file);
    setSrc(null);
  };

  return (
    <div style={{ width: "100%" }}>
      {!src && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      )}

      {src && (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
            {Object.keys(RATIO_PRESETS).map((key) => (
              <Button
                key={key}
                type="button"
                size="sm"
                variant={ratioKey === key ? "primary" : "outline"}
                onClick={(e) => {
                  e?.preventDefault?.();
                  e?.stopPropagation?.();
                  setRatioKey(key);
                }}
              >
                {key}
              </Button>
            ))}
          </div>

          <div
            style={{
              maxHeight: 400,
              overflow: "auto",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              keepSelection
              minWidth={20}
              minHeight={20}
            >
              <img
                ref={imgRef}
                src={src}
                onLoad={onImageLoad}
                alt="Crop"
                style={{ maxHeight: 400, display: "block" }}
              />
            </ReactCrop>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <Button
              type="button"
              onClick={(e) => {
                e?.preventDefault?.();
                e?.stopPropagation?.();
                handleSave();
              }}
              disabled={!completedCrop}
            >
              Save Image
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e?.preventDefault?.();
                e?.stopPropagation?.();
                setSrc(null);
                onCancel?.();
              }}
            >
              Cancel
            </Button>
          </div>
        </>
      )}
    </div>
  );
}