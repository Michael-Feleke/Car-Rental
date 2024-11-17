import mongoose from "mongoose";
import { MONGO_URI } from "../_config/environments";
import logger from "../_config/logger";
import { errorMessages } from "../_utils/messages/errorMessages";
import { logMessages } from "../_utils/messages/logMessages";

if (!MONGO_URI) {
  logger.error(errorMessages.mongoUri);
  throw new Error(errorMessages.mongoUri);
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const clientPromise = async (): Promise<mongoose.Connection> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((mongooseInstance) => {
        logger.info(logMessages.db.connected);
        return mongooseInstance.connection;
      })
      .catch((error) => {
        logger.error(errorMessages.mongooseConnectionError(error.message));
        throw new Error(errorMessages.mongoConnectionFailed);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default clientPromise;
