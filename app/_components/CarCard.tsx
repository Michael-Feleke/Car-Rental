import { UsersIcon } from "@heroicons/react/24/solid";
import { CarCardProps } from "./types";
import Image from "next/image";

function CarCard({ car }: CarCardProps) {
  const { id, name, maxCapacity, dailyPrice, discount, image } = car;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={`/${image}`}
          width={100}
          height={100}
          alt={`Car ${name}`}
          className="object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-lg">
            Save ${discount}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Car {name}</h3>

        {/* Capacity */}
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <UsersIcon className="h-5 w-5 text-gray-500" />
          <p>
            Seats up to <span className="font-semibold">{maxCapacity}</span>{" "}
            passengers
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between mb-4">
          {discount > 0 ? (
            <>
              <p className="text-2xl font-bold text-gray-800">
                ${dailyPrice - discount}
              </p>
              <p className="line-through text-gray-500">${dailyPrice}</p>
            </>
          ) : (
            <p className="text-2xl font-bold text-gray-800">${dailyPrice}</p>
          )}
          <span className="text-gray-600">/ day</span>
        </div>

        {/* Call to Action */}
        <div className="text-right">
          <a
            href={`/cars/${id}`}
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
          >
            View Details &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
