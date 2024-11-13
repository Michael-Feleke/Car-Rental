import mongoose from "mongoose";
import * as Statics from "./statics";

import { CarInterface, CarModelInterface } from "./types";
import carSchema from "./schema";

carSchema.static(Statics);

const Car =
  (mongoose.models.Car as unknown as CarModelInterface) ||
  mongoose.model<CarInterface, CarModelInterface>("Car", carSchema);

export default Car;


