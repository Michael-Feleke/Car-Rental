import { getSetting } from "../_services/setting";
import { getSession } from "../_utils/helpers/getSession";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservations() {
  const setting = await getSetting();
  const session = await getSession();

  return (
    <>
      <DateSelector setting={setting} />
      {session?.user ? (
        <ReservationForm user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </>
  );
}

export default Reservations;
