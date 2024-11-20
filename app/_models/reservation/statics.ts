import { Model } from "mongoose";
import { ReservationInterface } from "./types";

export async function createReservation(
  this: Model<ReservationInterface>,
  reservation: ReservationInterface
) {
  return this.create(reservation);
}

export async function getReservations(
  this: Model<ReservationInterface>,
  id: string
) {
  return this.find({ user: id })
    .populate("user", "name email")
    .populate("car", "name image");
}

export async function deleteReservation(
  this: Model<ReservationInterface>,
  id: string
) {
  return this.deleteOne({ _id: id });
}
