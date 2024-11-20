import { Document, Model } from "mongoose";

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

export interface ReservationModelInterface extends Model<ReservationInterface> {
  createReservation(
    reservation: Omit<ReservationInterface, "_id">
  ): Promise<ReservationInterface>;
  getReservations(id: string): Promise<ReservationInterface>;
}
