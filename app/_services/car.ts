import clientPromise from "../_lib/mongoose";
import Car from "../_models/car";
import { CarInterface } from "../_models/car/types";
import { ObjectId } from "mongodb";
import { errorMessages } from "../_utils/messages/errorMessages";
import { notFound } from "next/navigation";

export async function getCars(
  capacity?: "large" | "small" | "medium"
): Promise<CarInterface[]> {
  await clientPromise();
  const cars = await Car.findAllCars(capacity);
  return cars;
}

export async function getCarById(id: string) {
  await clientPromise();

  if (!ObjectId.isValid(id)) {
    throw new Error(errorMessages.invalidObjectId);
  }

  const car = await Car.findCarById(id);

  if (!car) notFound();

  return car;
}
