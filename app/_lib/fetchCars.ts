import { Car } from "../_components/types";
import clientPromise from "./mongodb";

export async function getCars(): Promise<Car[]> {
  const client = await clientPromise; // Await the MongoDB connection
  const db = client.db("car-rental"); // Select the database

  const cars = await db
    .collection<Car>("cars") // Type the collection as Car
    .find({})
    .toArray(); // Fetch all cars as an array of Car

  return cars; // Return the cars as an array of Car
}
