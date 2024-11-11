import { Metadata } from "next";
import { Suspense } from "react";
import CarList from "../_components/CarList";
import Spinner from "../_components/Spinner";
import { CAR_LISTS_REVALIDATE_TIME } from "../_utils/constants";
import { MetaTitles } from "../_utils/enums";

export const revalidate = CAR_LISTS_REVALIDATE_TIME;

export const metadata: Metadata = {
  title: MetaTitles.Cars,
};

function Page() {
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

      <Suspense fallback={<Spinner />}>
        <CarList />
      </Suspense>
    </div>
  );
}

export default Page;
