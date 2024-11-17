import { LOG_LEVELS } from "../_utils/constants";
import { Environments, LogLevels } from "../_utils/enums";
import { ENVIRONMENT, LOG_LEVEL } from "./environments";

type LogLevel = keyof typeof LOG_LEVELS;

const currentLogLevel: LogLevel = LOG_LEVEL as LogLevel;

const simpleLogger = (level: LogLevel, message: string): void => {
  if (ENVIRONMENT === Environments.Test) return;

  if (LOG_LEVELS[level] >= LOG_LEVELS[currentLogLevel]) {
    const timestamp = new Date().toISOString();
    const logMessage =
      ENVIRONMENT === Environments.Production
        ? `${timestamp} [${level}] ${message}`
        : `[${level}] ${message}`;

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
  info: (message: string) => simpleLogger(LogLevels.Info, message),
  warn: (message: string) => simpleLogger(LogLevels.Warn, message),
  error: (message: string) => simpleLogger(LogLevels.Error, message),
  debug: (message: string) => simpleLogger(LogLevels.Debug, message),
};

export default logger;
