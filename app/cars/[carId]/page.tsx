import { customerReviews } from "@/app/_components/types";
import { getCars } from "@/app/_lib/getCars";
import { getCarById } from "@/app/_lib/getCarById";
import {
  UsersIcon,
  StarIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { CarDetailPageProps } from "./types";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@/app/_utils/constants";

export async function generateMetadata({ params }: CarDetailPageProps) {
  const car = await getCarById(params.carId);
  const { name } = car;

  return {
    title: `${name}`,
  };
}

export async function generateStaticParams() {
  const cars = await getCars();
  const ids = cars.map((car) => ({
    carId: car._id.toString(),
  }));

  return ids;
}

export default async function Page({ params }: CarDetailPageProps) {
  const car = await getCarById(params.carId);

  if (!car) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-500 font-bold">Car not found!</h1>
      </div>
    );
  }

  const {
    name,
    maxCapacity,
    dailyPrice,
    discount,
    image,
    available,
    description,
    customerReviews,
    engine,
    features,
    performance,
  } = car;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 ">
      <div className="shadow-md rounded-lg overflow-hidden max-w-4xl w-full border border-gray-700">
        <div className="relative h-96 w-full">
          <Image
            src={image}
            alt={`Image of ${name}`}
            fill
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
              available ? "bg-green-500" : "bg-red-600"
            }`}
          >
            {available ? "Available" : "Not Available"}
          </div>
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
              Save ${discount}
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <div className="flex items-center gap-4 mb-4">
            {discount > 0 ? (
              <>
                <p className="text-3xl font-bold text-red-500">
                  ${dailyPrice - discount}
                </p>
                <p className="line-through">${dailyPrice}</p>
              </>
            ) : (
              <p className="text-3xl font-bold">${dailyPrice}</p>
            )}
            <span className="text-lg">/ day</span>
          </div>

          <div className="flex items-center gap-2 text-lg mb-4">
            <UsersIcon className="h-5 w-5" />
            Seats up to <span className="font-semibold">
              {maxCapacity}
            </span>{" "}
            passengers
          </div>

          <p className="text-lg mb-8">
            {description || "No description available for this car."}
          </p>

          <div className=" p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">
              Engine Specifications
            </h3>
            <div className="flex items-center">
              <Cog6ToothIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span>
                {engine.type}, {engine.horsepower} HP, Torque: {engine.torque}
              </span>
            </div>
          </div>

          <div className=" p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <div>
              <div className="flex items-center mb-1">
                <CheckCircleIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>{features.transmission} Transmission</span>
              </div>
              <div className="flex items-center mb-1">
                <InformationCircleIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>{features.infotainment} Infotainment</span>
              </div>
              <div className="flex items-center mb-1">
                <InformationCircleIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>Safety Features: {features.safety.join(", ")}</span>
              </div>
              <div className="flex items-center mb-1">
                <InformationCircleIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>Autonomy Level: {features.autonomyLevel}</span>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <div>
              <div className="flex items-center mb-1">
                <StarIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>Acceleration: {performance.acceleration}</span>
              </div>
              <div className="flex items-center mb-1">
                <StarIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>Top Speed: {performance.topSpeed}</span>
              </div>
              <div className="flex items-center mb-1">
                <StarIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>Fuel Type: {performance.fuelType}</span>
              </div>
            </div>
          </div>
          {customerReviews.length > 0 && (
            <div className=" p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
              {customerReviews.map((review: customerReviews, index: number) => (
                <div key={index} className="border-b py-2">
                  <p className="font-semibold">{review.name}:</p>
                  <p>{review.comment}</p>
                  <p className="text-yellow-500">Rating: {review.rating} ★</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between items-center">
            <Link
              href={ROUTE_CONSTANTS.cars}
              className="inline-block px-6 py-3 bg-gray-600  font-semibold rounded-lg shadow hover: transition-all duration-300 ease-in-out"
            >
              Back to Cars
            </Link>
            {available ? (
              <a
                href={`${ROUTE_CONSTANTS.booking}/${params.carId}`}
                className="inline-block px-6 py-3 bg-red-600 font-semibold rounded-lg shadow hover:bg-red-700 transition-all duration-300 ease-in-out"
              >
                Book Now &rarr;
              </a>
            ) : (
              <span className="inline-block px-6 py-3  font-semibold rounded-lg shadow cursor-not-allowed">
                Not Available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
