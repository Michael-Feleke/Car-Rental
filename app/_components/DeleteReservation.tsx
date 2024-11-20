"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { DeleteReservationProps } from "./types";

function DeleteReservation({ reservationId }: DeleteReservationProps) {
  const handleDelete = () => {
    // You can add confirmation logic or a deletion request here
    console.log(`Deleting reservation with ID: ${reservationId}`);
    // Call your backend deletion service, e.g., deleteReservation(bookingId)
  };

  return (
    <button
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
      onClick={handleDelete}
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
