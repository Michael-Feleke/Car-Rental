import { notFound } from "next/navigation";
import clientPromise from "../_lib/mongoose";
import {
  IPopulatedReservation,
  ReservationInterface,
} from "../_models/reservation/types";
import { errorMessages } from "../_utils/messages/errorMessages";
import { ObjectId } from "mongodb";
import Reservation from "../_models/reservation";
import Car from "../_models/car";

export async function createReservation(
  reservation: Omit<ReservationInterface, "_id,createdAt">
) {
  await clientPromise();

  const createdReservation = await Reservation.createReservation(reservation);

  return createdReservation;
}

export async function getReservations(
  id: string
): Promise<IPopulatedReservation[]> {
  await clientPromise();

  if (!ObjectId.isValid(id)) {
    throw new Error(errorMessages.invalidObjectId);
  }

  await Car.findAllCars();

  const reservations = await Reservation.getReservations(id);

  if (!reservations || !reservations.length) notFound();

  return reservations;
}