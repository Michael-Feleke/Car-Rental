import { Model } from "mongoose";
import { CarInterface } from "./types";

export async function findAllCars(
  this: Model<CarInterface>,
  capacity: "large" | "medium" | "small"
) {
  let matchCondition = {};
  if (capacity === "small") matchCondition = { maxCapacity: { $lte: 4 } };
  else if (capacity === "medium")
    matchCondition = { maxCapacity: { $gt: 4, $lte: 6 } };
  else if (capacity === "large") matchCondition = { maxCapacity: { $gt: 6 } };
  return await this.aggregate([
    {
      $match: matchCondition,
    },
  ]);
}

export async function findCarById(this: Model<CarInterface>, id: string) {
  return await this.findById(id);
}
