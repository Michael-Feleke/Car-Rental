import { Document, Model } from "mongoose";

export interface customerReviews {
  name: string;
  comment: string;
  rating: number;
}

export interface CarInterface extends Document {
  _id: string;
  name: string;
  maxCapacity: number;
  dailyPrice: number;
  discount: number;
  image: string;
  available: boolean;
  description: string;
  customerReviews: customerReviews[];
  engine: {
    type: string;
    horsepower: number;
    torque: string;
  };
  features: {
    transmission: string;
    infotainment: string;
    safety: string[];
    autonomyLevel: string;
  };
  performance: {
    acceleration: string;
    topSpeed: string;
    fuelType: string;
  };
}

export interface CarModelInterface extends Model<CarInterface> {
  findAllCars(): Promise<CarInterface[]>;
  findCarById(id: string): Promise<CarInterface | null>;
}
