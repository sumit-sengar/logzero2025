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
  
  // Enable image smoothing for better quality
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

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

  return new Promise((resolve, reject) => {
    // Use 0.85 quality for better compression (targeting 2MB limit)
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Canvas to Blob conversion failed"));
        }
      },
      "image/jpeg",
      0.85
    );
  });
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const aspect = RATIO_PRESETS[ratioKey];

  // Update crop when ratio changes
  useEffect(() => {
    if (!imgRef.current) return;
    const { width, height } = imgRef.current;
    const newCrop = getCenteredCrop(width, height, aspect);
    setCrop(newCrop);
  }, [ratioKey, aspect]);

  // Cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (src && src.startsWith("blob:")) {
        URL.revokeObjectURL(src);
      }
    };
  }, [src]);

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return;
    }

    // Validate file size (max 2MB for database storage)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("Image size must be less than 2MB");
      return;
    }

    setError(null);
    setIsLoading(true);

    const reader = new FileReader();
    
    reader.onload = () => {
      setSrc(reader.result);
      setIsLoading(false);
    };

    reader.onerror = () => {
      setError("Failed to read image file");
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const newCrop = getCenteredCrop(width, height, aspect);
    setCrop(newCrop);
  };

  const handleSave = async () => {
    if (!imgRef.current || !completedCrop) {
      setError("Please select a crop area");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const blob = await cropToBlob(imgRef.current, completedCrop, outputSize);
      
      // Generate filename with timestamp
      const timestamp = Date.now();
      const file = new File([blob], `image-${timestamp}.jpg`, { 
        type: "image/jpeg",
        lastModified: timestamp
      });

      onChange?.(file);
      
      // Reset state
      setSrc(null);
      setCrop(undefined);
      setCompletedCrop(null);
      setRatioKey(defaultRatio);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Error saving image:", err);
      setError("Failed to save image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Cleanup
    if (src && src.startsWith("blob:")) {
      URL.revokeObjectURL(src);
    }
    
    setSrc(null);
    setCrop(undefined);
    setCompletedCrop(null);
    setRatioKey(defaultRatio);
    setError(null);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    onCancel?.();
  };

  return (
    <div style={{ width: "100%" }}>
      {error && (
        <div
          style={{
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            color: "#991b1b",
          }}
        >
          {error}
        </div>
      )}

      {!src && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/jpg,image/webp"
            onChange={onSelectFile}
            disabled={isLoading}
            style={{ width: "100%" }}
          />
          <div
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            {isLoading ? (
              "Loading image..."
            ) : (
              "Maximum file size: 2MB (JPEG, PNG, WebP)"
            )}
          </div>
        </div>
      )}

      {src && (
        <>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 12,
            }}
          >
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
                disabled={isLoading}
              >
                {key}
              </Button>
            ))}
          </div>

          <div
            style={{
              maxHeight: 500,
              overflow: "auto",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              backgroundColor: "#f9fafb",
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
                alt="Crop preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: 500,
                  display: "block",
                }}
              />
            </ReactCrop>
          </div>

          {completedCrop && (
            <div
              style={{
                marginTop: 8,
                padding: 8,
                backgroundColor: "#f3f4f6",
                borderRadius: 4,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Crop size: {Math.round(completedCrop.width)} × {Math.round(completedCrop.height)} px
              {outputSize && (
                <span>
                  {" "}
                  → Output: {outputSize.width} × {outputSize.height} px
                </span>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <Button
              type="button"
              onClick={(e) => {
                e?.preventDefault?.();
                e?.stopPropagation?.();
                handleSave();
              }}
              disabled={!completedCrop || isLoading}
            >
              {isLoading ? "Saving..." : "Save Image"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e?.preventDefault?.();
                e?.stopPropagation?.();
                handleCancel();
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </>
      )}
    </div>
  );
}