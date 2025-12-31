import pino from "pino";

const logger = pino({
  level:
    process.env.NEXT_PUBLIC_LOG_LEVEL ||
    (process.env.NODE_ENV === "development" ? "debug" : "info"),
  base: {
    app: "logzero-web",
    environment: process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV,
  },
  browser: {
    asObject: true,
  },
});

export default logger;
