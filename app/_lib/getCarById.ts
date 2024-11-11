import { notFound } from "next/navigation";
import clientPromise from "./mongoose";
import { ObjectId } from "mongodb"; // Still use ObjectId
import { errorMessages } from "../_utils/messages/errorMessages";
import Car from "../_models/car";

export async function getCarById(id: string) {
  await clientPromise;

  if (!ObjectId.isValid(id)) {
    throw new Error(errorMessages.invalidObjectId);
  }

  const car = await Car.findCarById(id);

  if (!car) notFound();

  return car;
}
