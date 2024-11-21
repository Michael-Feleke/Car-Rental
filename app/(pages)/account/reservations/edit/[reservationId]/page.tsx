// import { EditReservationProps } from "./types";

import { getSingleReservation } from "@/app/_services/reservation";
import { EditReservationProps } from "./types";

export async function generateMetadata({ params }: EditReservationProps) {
  const reservation = await getSingleReservation(params.reservationId);
  const {
    car: { name: carName },
  } = reservation;

  return {
    title: `${carName}`,
  };
}

export default async function Page({ params }: EditReservationProps) {
  const reservation = await getSingleReservation(params.reservationId);

  const {
    _id: reservationId,
    car: { maxCapacity, name: carName },
  } = reservation;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-7">
        Edit Reservation #{reservationId.toString()} for {carName}
      </h2>

      <form className="bg-gray-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity ?? 0 }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              )
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-red-500 px-8 py-4  font-semibold hover:bg-red-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update reservation
          </button>
        </div>
      </form>
    </div>
  );
}
