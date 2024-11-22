import { auth } from "../_lib/auth";
import { getCarReservationByAllUsers } from "../_services/reservation";
import { getSetting } from "../_services/setting";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { ReservationsProps } from "./types";

async function Reservations({ car }: ReservationsProps) {
  const session = await auth();
  const setting = await getSetting();
  const reservations = await getCarReservationByAllUsers(car._id.toString());

  const reservedRanges = reservations.map((reservation) => ({
    from: new Date(reservation.startDate),
    to: new Date(reservation.endDate),
  }));

  const { maxCapacity, dailyPrice, discount, _id } = car;
  const dateSelectorCarData = { dailyPrice, discount };
  const reservationFormCarData = {
    maxCapacity,
    dailyPrice,
    discount,
    _id: _id.toString(),
  };

  const { minRentDuration, maxRentDuration } = setting;
  const plainSetting = { minRentDuration, maxRentDuration };

  return (
    <div className="flex items-center gap-32 ">
      <DateSelector
        setting={plainSetting}
        car={dateSelectorCarData}
        reservations={reservedRanges}
      />
      {session?.user ? (
        <ReservationForm car={reservationFormCarData} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservations;
