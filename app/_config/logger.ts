import { COLORS, LOG_LEVELS } from "../_utils/constants";
import { Environments, LogLevels } from "../_utils/enums";
import { ENVIRONMENT, LOG_LEVEL } from "./environments";

type LogLevel = keyof typeof LOG_LEVELS;

const currentLogLevel: LogLevel = LOG_LEVEL as LogLevel;

const simpleLogger = (level: LogLevel, message: unknown): void => {
  if (ENVIRONMENT === Environments.Test) return;

  if (LOG_LEVELS[level] >= LOG_LEVELS[currentLogLevel]) {
    const timestamp = new Date().toISOString();
    const color = COLORS[level] || COLORS.reset;

    const formattedMessage =
      typeof message === "object" && message !== null
        ? JSON.stringify(message, null, 2)
        : message;

    const logMessage =
      ENVIRONMENT === Environments.Production
        ? `${timestamp} [${color}${level}${COLORS.reset}] ${formattedMessage}`
        : `[${color}${level}${COLORS.reset}] ${formattedMessage}`;

    if (level === LogLevels.Error) {
      console.error(logMessage);
    } else if (level === LogLevels.Warn) {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }
};

const logger = {
  info: (message: unknown) => simpleLogger(LogLevels.Info, message),
  warn: (message: unknown) => simpleLogger(LogLevels.Warn, message),
  error: (message: unknown) => simpleLogger(LogLevels.Error, message),
  debug: (message: unknown) => simpleLogger(LogLevels.Debug, message),
};

export default logger;
