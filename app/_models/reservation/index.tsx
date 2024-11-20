import mongoose from "mongoose";
import * as Statics from "./statics";

import { ReservationInterface, ReservationModelInterface } from "./types";
import reservationSchema from "./schema";

reservationSchema.static(Statics);

const Reservation =
  (mongoose.models?.Reservation as unknown as ReservationModelInterface) ||
  mongoose.model<ReservationInterface, ReservationModelInterface>(
    "Reservation",
    reservationSchema
  );

export default Reservation;
