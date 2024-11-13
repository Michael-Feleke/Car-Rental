import { Metadata } from "next";
import aboutImage from "@/public/images/bg-car-2.jpg";
import Image from "next/image";
import { MetaTitles } from "../_utils/enums";
import {
  ABOUT_PAGE_REVALIDATE_TIME,
  ROUTE_CONSTANTS,
} from "../_utils/constants";
import Link from "next/link";
import { getCars } from "../_services/car";

export const revalidate = ABOUT_PAGE_REVALIDATE_TIME;

export const metadata: Metadata = {
  title: MetaTitles.About,
};

async function page() {
  const cars = await getCars();
  const numberOfCars = cars.length;

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl text-red-500 mb-10 text-accent-400 font-medium">
          Welcome to GoDrive Car Rental
        </h1>

        <div className="space-y-8">
          <p>
            Your journey begins here. GoDrive Car Rental offers a wide selection
            of luxury and budget vehicles to meet all your travel needs. Whether
            you are exploring the city or heading on a long road trip, we have
            the perfect car for you.
          </p>
          <p>
            Our fleet of {numberOfCars} cars includes the latest models from top
            brands, ensuring you enjoy both style and comfort. From sleek sedans
            to spacious SUVs, all our cars are well-maintained and ready to hit
            the road. Experience a smooth and enjoyable ride with GoDrive.
          </p>
          <p>
            With flexible rental options, competitive pricing, and a focus on
            customer satisfaction, we are here to make your trip as convenient
            and enjoyable as possible. Choose GoDrive, and drive with
            confidence.
          </p>
        </div>
      </div>

      <div className=" relative aspect-square col-span-2">
        <Image
          src={aboutImage}
          fill
          className="object-cover"
          placeholder="blur"
          alt="Luxury car available for rental"
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={aboutImage}
          fill
          className="object-cover"
          placeholder="blur"
          alt="Sedan driving on a scenic road"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl  text-red-500 mb-10 text-accent-400 font-medium">
          Trusted Car Rental Services Since 2010
        </h1>

        <div className="space-y-8">
          <p>
            GoDrive Car Rental has been proudly serving travelers and locals
            alike since 2010. With a focus on reliability, excellent customer
            service, and a diverse range of vehicles, we have become a trusted
            choice for all kinds of journeys.
          </p>
          <p>
            Over the years, we have grown our fleet and expanded our services to
            provide the best rental experience possible. Whether you are
            traveling for business, pleasure, or need a car for a special
            occasion, we are here to ensure your driving experience is
            exceptional.
          </p>

          <div>
            <Link
              href={ROUTE_CONSTANTS.cars}
              className="inline-block mt-4 bg-red-600 px-8 py-5 text-white text-lg font-semibold hover:bg-red-700 transition-all"
            >
              Explore our fleet of cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
