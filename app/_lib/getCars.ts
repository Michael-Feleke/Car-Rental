import Car from "../_models/car";
import { CarInterface } from "../_models/car/types";
import clientPromise from "./mongoose";

export async function getCars(
  capacity: "large" | "small" | "medium"
): Promise<CarInterface[]> {
  await clientPromise();
  const cars = await Car.findAllCars(capacity);
  return cars;
}
