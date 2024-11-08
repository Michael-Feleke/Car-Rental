import { notFound } from "next/navigation";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb"; // Still use ObjectId

export async function getCarById(id: string) {
  const client = await clientPromise; // Await the MongoDB connection
  const db = client.db("car-rental"); // Select the database

  // Ensure the id is a valid ObjectId string
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid ObjectId");
  }

  // Fetch the car by its ObjectId from the "cars" collection
  const car = await db.collection("cars").findOne({ _id: new ObjectId(id) });

  if (!car) notFound();

  return car; // Return the car object (null if not found)
}
