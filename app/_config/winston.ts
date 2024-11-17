import winston, { Logger } from "winston";
// import path from "path";
// import { ensureDirectoryExists } from "../_utils/helpers/ensureDirectoryExists";
import { Environments } from "../_utils/enums";
import { ENVIRONMENT, LOG_LEVEL } from "./environments";

// const errorLogPath = path.join("logs", "error.log");
// const combinedLogPath = path.join("logs", "combined.log");

// ensureDirectoryExists({ filePath: errorLogPath });
// ensureDirectoryExists({ filePath: combinedLogPath });

const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return ENVIRONMENT === Environments.Production
    ? `${timestamp} [${level}]: ${message}`
    : `[${level}]: ${message}`;
});

const logger: Logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
      silent: ENVIRONMENT === Environments.Test,
    }),
  ],
});

// if (ENVIRONMENT === Environments.Production) {
//   const logDirectory: string = path.join("logs");

//   logger.add(
//     new winston.transports.File({
//       filename: path.join(logDirectory, "error.log"),
//       level: "error",
//     })
//   );

//   logger.add(
//     new winston.transports.File({
//       filename: path.join(logDirectory, "combined.log"),
//     })
//   );
// }

export default logger;
