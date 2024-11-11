export const errorMessages = {
  mongoUri: "Please add your Mongo URI to .env.local",
  envValidationErr: (err: string) => `Env vars validation error: ${err}`,
  initialConnectionError: (err: string) => `Initial connection error: ${err}`,
  mongooseConnectionError: (err: string) => `Mongoose connection error: ${err}`,
  mongoConnectionFailed: "Mongo connection failed",
  invalidObjectId: "Invalid ObjectId",
  countryFetchFailed: (err: string) => `Failed to fetch countries:${err} `,
  unknownError: "An unknown error occurred",
};