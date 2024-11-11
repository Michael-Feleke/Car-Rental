import { ROUTE_CONSTANTS } from "@/app/_utils/constants";
import { MetaTitles } from "@/app/_utils/enums";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: MetaTitles.Reservations,
};

export default function Page() {
  // CHANGE
  // const bookings: any = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-7">
        Your car reservations
      </h2>

      {
        true ? (
          <p className="text-lg">
            You have no reservations yet. Check out our{" "}
            <Link
              className="underline text-red-500"
              href={ROUTE_CONSTANTS.cars}
            >
              available cars &rarr;
            </Link>
          </p>
        ) : (
          ""
        )
        //  : (
        //   <ul className="space-y-6">
        //     {bookings.map((booking) => (
        //       <ReservationCard booking={booking} key={booking.id} />
        //     ))}
        //   </ul>
        // )
      }
    </div>
  );
}
