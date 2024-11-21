"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { DeleteReservationProps } from "./types";
import { handleDeleteReservation } from "../_lib/actions";
import { useTransition } from "react";

function DeleteReservation({ reservationId }: DeleteReservationProps) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => handleDeleteReservation(reservationId));
  };

  return (
    <button
      className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-300 flex-grow px-3 hover:bg-red-600 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      onClick={handleDelete}
      disabled={pending}
    >
      {!pending ? (
        <>
          <TrashIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mt-1">Deleting ...</span>
      )}
    </button>
  );
}

export default DeleteReservation;
