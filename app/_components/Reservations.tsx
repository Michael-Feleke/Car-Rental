import { auth } from "../_lib/auth";
import { getSetting } from "../_services/setting";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservations() {
  const setting = await getSetting();
  const session = await auth();

  console.log({ session });

  const plainSetting = JSON.parse(JSON.stringify(setting));

  return (
    <>
      <DateSelector setting={plainSetting} />
      {session?.user ? (
        <ReservationForm user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </>
  );
}

export default Reservations;
