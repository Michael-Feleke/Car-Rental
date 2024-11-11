import { Model } from "mongoose";
import { CarInterface } from "./types";

export async function findAllCars(this: Model<CarInterface>) {
  return await this.find({});
}

export async function findCarById(this: Model<CarInterface>, id: string) {
  return await this.findById(id);
}
