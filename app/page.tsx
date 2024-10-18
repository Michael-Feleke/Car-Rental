import Image from "next/image";
import Link from "next/link";
import { routeConstants } from "./_utils/constants";
import backgroundImage from "@/public/images/bg-image.jpeg";

function Home() {
  return (
    <main className="mt-24">
      <Image
        src={backgroundImage}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-top "
        alt="Background image of a car"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl  mb-10 tracking-tight font-normal">
          Welcome to
          <span className="text-red-600"> GoDrive </span>
          Car Rental
        </h1>
        <Link
          href={routeConstants.cars}
          className="bg-red-600 px-8 py-5 text-lg font-semibold hover:bg-red-700 transition-all duration-200 ease-in-out rounded-lg"
        >
          View Cars
        </Link>
      </div>
    </main>
  );
}

export default Home;
