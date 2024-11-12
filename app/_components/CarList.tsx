import { getCars } from "../_lib/getCars";
import CarCard from "./CarCard";
import { carListProps } from "./types";

async function CarList({ capacity }: carListProps) {
  const cars = await getCars(capacity);

  if (cars.length === 0) {
    return (
      <div className="flex justify-center items-center text-center p-8  rounded-lg shadow-lg">
        <p className="text-xl font-semibold ">No cars available</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cars.map((car) => (
        <CarCard car={car} key={car._id} />
      ))}
    </div>
  );
}

export default CarList;
