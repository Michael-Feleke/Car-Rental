import { CarDetailPageProps } from "./types";
import { getCarById, getCars } from "@/app/_services/car";
import Reservations from "@/app/_components/Reservations";
import CarDetail from "@/app/_components/CarDetail";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

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

  return (
    <div className="flex flex-col justify-start">
      <CarDetail car={car} />
      <div className="flex items-center justify-center min-h[400px] pt-7 gap-2">
        {car.available ? (
          <Suspense fallback={<Spinner />}>
            <Reservations car={car} />
          </Suspense>
        ) : (
          <p className="text-2xl font-semibold text-red-500">Not Available</p>
        )}
      </div>
    </div>
  );
}
