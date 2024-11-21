import ReservationCard from "@/app/_components/ReservationCard";
import { getReservations } from "@/app/_services/reservation";
import { MetaTitles } from "@/app/_utils/enums";
import { getSession } from "@/app/_utils/helpers/getSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: MetaTitles.Reservations,
};

export default async function Page() {
  const session = await getSession();
  const userId = session?.user?.userId || "";
  const reservations = await getReservations(userId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-7">
        Your car reservations
      </h2>

      <ul className="space-y-6">
        {reservations.map((reservation) => (
          <ReservationCard reservation={reservation} key={reservation._id} />
        ))}
      </ul>
    </div>
  );
}
