import { Metadata } from "next";
import CarCard from "../_components/CarCard";

export const metadata: Metadata = {
  title: "Cars",
};

export function page() {
  const cars = [
    {
      id: 1,
      name: "Model S",
      maxCapacity: 5,
      dailyPrice: 150,
      discount: 0,
      image: "public/images/bg-car-2.jpg",
    },
    {
      id: 2,
      name: "Model 3",
      maxCapacity: 5,
      dailyPrice: 100,
      discount: 10,
      image: "public/images/bg-car-2.jpeg",
    },
    {
      id: 3,
      name: "Model X",
      maxCapacity: 7,
      dailyPrice: 200,
      discount: 20,
      image: "public/images/bg-car-2.jpeg",
    },
    {
      id: 4,
      name: "Model Y",
      maxCapacity: 5,
      dailyPrice: 120,
      discount: 0,
      image: "public/images/logo.jpeg",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-red-500 font-medium">
        Our Luxury Cars
      </h1>
      <p className=" mb-10 text-lg">
        Discover our exclusive collection of luxury cars, designed to provide
        unparalleled comfort and performance. Each vehicle in our fleet is
        meticulously maintained and equipped with the latest technology to
        ensure a premium driving experience. Whether you are looking for a sleek
        sports car or a spacious SUV, we have the perfect option to suit your
        needs. Experience the ultimate in luxury and sophistication with our
        top-of-the-line cars.
      </p>

      {/* {cars.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default page;
