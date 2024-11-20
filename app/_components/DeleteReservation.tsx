"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { DeleteReservationProps } from "./types";
import { handleDeleteReservation } from "../_lib/actions";

function DeleteReservation({ reservationId }: DeleteReservationProps) {
  return (
    <button
      className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-300 flex-grow px-3 hover:bg-red-600 transition-colors hover:text-gray-900"
      onClick={() => handleDeleteReservation(reservationId)}
    >
      <TrashIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
