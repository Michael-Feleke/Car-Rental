import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
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
            <a className="underline text-red-500" href="/cars">
              available cars &rarr;
            </a>
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
