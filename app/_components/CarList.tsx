import { getCars } from "../_lib/fetchCars";
import CarCard from "./CarCard";

async function CarList() {
  const cars = await getCars();

  if (cars.length === 0) {
    return <p>No cars available</p>;
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
