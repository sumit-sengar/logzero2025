"use client";
import React, { useEffect, useRef } from "react";
// Host-aware site key selection with env overrides
const DEFAULT_PROD_KEY = "6LccVGAsAAAAACBc9LwyVxHxC80FKguYKDG5ErGh"; // real v2 checkbox key
const DEFAULT_LOCAL_TEST_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Google test key
const SCRIPT_ID = "recaptcha-key-script";

function resolveSiteKey() {
  const envLocal = process.env.NEXT_PUBLIC_RECAPTCHA_LOCAL_SITE_KEY;
  const envProd = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (typeof window === "undefined") {
    return envProd || DEFAULT_PROD_KEY;
  }

  const host = window.location?.hostname || "";
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const resolvedKey = isLocal ? (envLocal || DEFAULT_LOCAL_TEST_KEY) : (envProd || DEFAULT_PROD_KEY);
  const mode = isLocal ? "Local" : "Prod";
  const keyPreview = resolvedKey.substring(0, 10) + "...";

  // console.log(`Recaptcha Mode: ${mode} Key: ${keyPreview}`);

  return resolvedKey;
}

const Recaptcha = ({ onVerify, theme = "light" }) => {
  const recaptchaRef = useRef(null);
  const scriptLoaded = useRef(false);
  const widgetIdRef = useRef(null);
  const latestOnVerify = useRef(onVerify);

  // Keep latestOnVerify in sync with the latest onVerify prop
  useEffect(() => {
    latestOnVerify.current = onVerify;
  }, [onVerify]);

  // Load script and render widget once on mount
  useEffect(() => {
    if (typeof window === "undefined" || !recaptchaRef.current) return;

    const renderWidget = () => {
      if (
        !recaptchaRef.current ||
        !window.grecaptcha ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      try {
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: resolveSiteKey(),
          theme,
          callback: (token) => latestOnVerify.current?.(token),
          "expired-callback": () => {
            latestOnVerify.current?.(null);
            try {
              if (widgetIdRef.current !== null) {
                window.grecaptcha.reset(widgetIdRef.current);
              }
            } catch (e) {}
          },
          "error-callback": () => {
            latestOnVerify.current?.(null);
          },
        });
      } catch (e) {
        console.error("Failed to render reCAPTCHA", e);
      }
    };

    const handleOnload = () => {
      scriptLoaded.current = true;
      renderWidget();
    };

    if (window.grecaptcha) {
      handleOnload();
    } else {
      window.onloadRecaptchaCallback = handleOnload;

      const existingScript = document.getElementById(SCRIPT_ID);
      if (!existingScript && !scriptLoaded.current) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src =
          "https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      delete window.onloadRecaptchaCallback;
    };
  }, [theme]);

  return <div ref={recaptchaRef} style={{ minWidth: "304px", minHeight: "78px" }} />;
};

export default Recaptcha;