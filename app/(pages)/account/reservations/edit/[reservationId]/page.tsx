import { getSingleReservation } from "@/app/_services/reservation";
import { EditReservationProps } from "./types";
import { editReservation } from "@/app/_lib/actions";
import EditProfileButton from "@/app/_components/EditProfileButton";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@/app/_utils/constants";

export async function generateMetadata({ params }: EditReservationProps) {
  const reservation = await getSingleReservation(params.reservationId);
  const {
    car: { name: carName },
  } = reservation;

  return {
    title: `${carName}`,
  };
}

async function Page({ params }: EditReservationProps) {
  const reservation = await getSingleReservation(params.reservationId);

  const {
    _id: reservationId,
    car: { maxCapacity, name: carName },
    numberOfPassengers,
    description,
  } = reservation;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-7">
        Edit Reservation #{reservationId.toString()} for {carName}
      </h2>

      <form
        action={editReservation}
        className="bg-gray-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input
          type="hidden"
          name="reservationId"
          value={reservationId.toString()}
        />
        <div className="space-y-2">
          <label htmlFor="numberOfPassengers">How many Passengers?</label>
          <select
            name="numberOfPassengers"
            id="numberOfPassengers"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            required
            defaultValue={numberOfPassengers}
          >
            <option value="" key="">
              Select number of Passengers...
            </option>
            {Array.from({ length: maxCapacity ?? 0 }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "passenger" : "Passengers"}
                </option>
              )
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="description">
            Anything we should know about your stay?
          </label>
          <textarea
            name="description"
            defaultValue={description}
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-between items-center gap-6">
          <Link
            href={ROUTE_CONSTANTS.account.reservations.base}
            className="inline-block px-6 py-3 bg-gray-700  font-semibold rounded-lg shadow hover: transition-all duration-300 ease-in-out"
          >
            &larr; Cancel
          </Link>
          <EditProfileButton />
        </div>
      </form>
    </div>
  );
}

export default Page;
