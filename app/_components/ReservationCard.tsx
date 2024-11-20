import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import { ReservationCardProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "../_utils/constants";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ reservation }: ReservationCardProps) {
  const {
    _id,
    startDate,
    endDate,
    numberOfDays,
    totalPrice,
    car: { name, image },
    // status,
    createdAt,
  } = reservation;

  return (
    <div className="flex border border-gray-800">
      <div className="relative h-32 aspect-square">
        <Image
          src={image || ""}
          fill
          alt={`Car ${name}`}
          className="object-cover border-r border-gray-800"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numberOfDays} days with {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-gray-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate.toISOString())}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-green-400">${totalPrice}</p>
          <p className="text-gray-300">&bull;</p>
          <p className="ml-auto text-sm text-gray-400">
            Reserved {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-gray-800 w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`${ROUTE_CONSTANTS.account.reservations.edit}/${_id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-300 border-b border-gray-800 flex-grow px-3 hover:bg-green-600 transition-colors hover:text-gray-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation reservationId={_id.toString()} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
