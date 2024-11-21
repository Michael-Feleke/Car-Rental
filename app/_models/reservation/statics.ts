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

export async function findReservationById(
  this: Model<ReservationInterface>,
  id: string
) {
  return this.findById(id)
    .populate("user", "name email")
    .populate("car", "name maxCapacity");
}

export async function deleteReservation(
  this: Model<ReservationInterface>,
  id: string
) {
  return this.deleteOne({ _id: id });
}

export async function editReservationById(
  this: Model<ReservationInterface>,
  id: string,
  updatedReservation: Partial<ReservationInterface>
) {
  return this.findOneAndUpdate(
    { _id: id },
    {
      $set: updatedReservation,
    },
    {
      new: true,
      runValidators: true,
    }
  );
}
