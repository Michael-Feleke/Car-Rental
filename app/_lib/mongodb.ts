import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// In production mode, it's best to use a single instance of MongoClient to avoid memory leaks
if (process.env.NODE_ENV === "production") {
  client = new MongoClient(uri);
  clientPromise = client.connect();
} else {
  // In development mode, use a global variable to store the client, so it's reused across hot reloads
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the client promise to be used in other files
export default clientPromise;
