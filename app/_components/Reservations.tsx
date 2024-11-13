import { getSetting } from "../_services/setting";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservations() {
  const setting = await getSetting();

  const plainSetting = JSON.parse(JSON.stringify(setting));

  return (
    <>
      <DateSelector setting={plainSetting} />
      <ReservationForm />
    </>
  );
}

export default Reservations;
