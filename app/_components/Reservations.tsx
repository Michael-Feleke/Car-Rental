import { getCarReservationByAllUsers } from "../_services/reservation";
import { getSetting } from "../_services/setting";
import { getSession } from "../_utils/helpers/getSession";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { ReservationsProps } from "./types";

async function Reservations({ car }: ReservationsProps) {
  const session = await getSession();
  const setting = await getSetting();
  const reservations = await getCarReservationByAllUsers(car._id.toString());

  const reservedRanges = reservations.map((reservation) => ({
    from: new Date(reservation.startDate),
    to: new Date(reservation.endDate),
  }));

  const { dailyPrice, discount } = car;
  const carData = { dailyPrice, discount };

  const { minRentDuration, maxRentDuration } = setting;
  const plainSetting = { minRentDuration, maxRentDuration };

  return (
    <>
      <DateSelector
        setting={plainSetting}
        car={carData}
        reservations={reservedRanges}
      />
      {session?.user ? (
        <ReservationForm user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </>
  );
}

export default Reservations;
