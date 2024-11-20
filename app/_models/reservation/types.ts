import { Document, Model } from "mongoose";
import { UserInterface } from "../user/types";
import { CarInterface } from "../car/types";

export interface ReservationInterface extends Document {
  _id: string;
  user: string;
  car: string;
  startDate: Date;
  endDate: Date;
  status: string;
  numberOfDays: number;
  totalPrice: number;
}

export interface IPopulatedReservation {
  _id: string;
  user: Partial<UserInterface>;
  car: Partial<CarInterface>;
  startDate: Date;
  endDate: Date;
  status: string;
  numberOfDays: number;
  totalPrice: number;
  createdAt: Date;
}

export interface ReservationModelInterface extends Model<ReservationInterface> {
  createReservation(
    reservation: Omit<ReservationInterface, "_id">
  ): Promise<ReservationInterface>;
  getReservations(id: string): Promise<IPopulatedReservation[]>;
  deleteReservation(id: string): Promise<IPopulatedReservation>;
}
