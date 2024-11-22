"use client";

import Image from "next/image";
import { ReservationFormProps } from "./types";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createReservation } from "../_lib/actions";
import { useFormStatus } from "react-dom";

function ReservationForm({ user, car }: ReservationFormProps) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, dailyPrice, discount, _id } = car;

  const startDate = range?.to;
  const endDate = range?.from;

  const numberOfDays =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const totalPrice = numberOfDays * (dailyPrice - discount);

  const reservationData = {
    startDate,
    endDate,
    numberOfDays,
    totalPrice,
    car: _id,
  };

  const createReservationWithData = createReservation.bind(
    null,
    reservationData
  );

  return (
    <div className="scale-[1.01]">
      <div className="bg-gray-800 px-16 py-2 flex justify-between items-center">
        <p>Logged in as {user.name}</p>

        <div className="flex gap-4 items-center">
          <Image
            width={40}
            height={40}
            referrerPolicy="no-referrer"
            className="h-8 w-8 rounded-full"
            src={user?.image || ""}
            alt={user?.name || "image of the logged in user"}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData: FormData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
        className="bg-gray-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numberOfPassengers">How many passengers?</label>
          <select
            name="numberOfPassengers"
            id="numberOfPassengers"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of passengers...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="description">
            Anything we should know about your stay?
          </label>
          <textarea
            name="description"
            id="description"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className=" text-base">Start by selecting dates</p>
          ) : (
            <Button />
          )}
        </div>
      </form>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-200 ease-in-out rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 "
      disabled={pending}
    >
      {pending ? "Reserving..." : "Reserve now"}
    </button>
  );
}

export default ReservationForm;
