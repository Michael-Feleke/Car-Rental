"use client";

import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";
import { errorMessages } from "../_utils/messages/errorMessages";
import { ReservationContextType } from "./types";

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error(
      errorMessages.contextOutOfTheProvider(
        "ReservationContext",
        "ReservationProvider"
      )
    );
  }
  return context;
}

export { ReservationProvider, useReservation };
