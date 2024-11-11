import { UsersIcon } from "@heroicons/react/24/solid";
import { CarCardProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "../_utils/constants";

function CarCard({ car }: CarCardProps) {
  const {
    _id: id,
    name,
    maxCapacity,
    dailyPrice,
    discount,
    image,
    available,
  } = car;

  return (
    <div className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-700 group transition-transform duration-300 hover:scale-105">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          fill
          alt={`Car ${name}`}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
            available ? "bg-green-500 text-white" : "bg-red-600 text-white"
          }`}
        >
          {available ? "Available" : "Not Available"}
        </div>

        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
            Save ${discount}
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gray-800 bg-opacity-90 p-6 opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3
          className={`text-3xl font-bold mb-2 text-white ${
            discount > 0 ? "mt-6" : ""
          }`}
        >
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-4 text-gray-300">
          <UsersIcon className="h-5 w-5 text-white" />
          <p>
            Seats up to <span className="font-semibold">{maxCapacity}</span>{" "}
            passengers
          </p>
        </div>

        <div className="flex items-center gap-2 justify-start mb-6">
          {discount > 0 ? (
            <>
              <p className="text-3xl font-bold text-red-400">
                ${dailyPrice - discount}
              </p>
              <p className="line-through text-gray-400">${dailyPrice}</p>
            </>
          ) : (
            <p className="text-3xl font-bold text-white">${dailyPrice}</p>
          )}
          <span className="text-gray-400">/ day</span>
        </div>

        <div className="text-right">
          {available ? (
            <Link
              href={`${ROUTE_CONSTANTS.cars}/${id}`}
              className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-all duration-300 ease-in-out"
            >
              View Details &rarr;
            </Link>
          ) : (
            <span className="inline-block px-6 py-3 bg-gray-500 text-gray-300 font-semibold rounded-lg shadow cursor-not-allowed">
              Not Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarCard;
