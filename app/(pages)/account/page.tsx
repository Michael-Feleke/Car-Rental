import { Metadata } from "next";
import { MetaTitles } from "../../_utils/enums";
import { getSession } from "@/app/_utils/helpers/getSession";
// import { createReservation } from "@/app/_services/reservation";

export const metadata: Metadata = {
  title: MetaTitles.Account,
};

async function page() {
  // To create a new reservation

  // const reservation = {
  //   user: "673a650b7901aaf66dc016d7",
  //   car: "672e484bd648b472f1c1c18c",
  //   startDate: new Date("2024-11-21T10:00:00Z"), // Example start date
  //   endDate: new Date("2024-11-25T10:00:00Z"), // Example end date
  //   status: "confirmed", // Example status
  //   numberOfDays: 4, // Calculated based on the example dates
  //   numberOfPassengers: 5,
  //   totalPrice: 400, // Example total price
  // };

  // await createReservation(reservation);
  const session = await getSession();
  return (
    <h2 className="text-2xl  text-red-500">Welcome, {session?.user?.name}</h2>
  );
}

export default page;

//car id 672e484bd648b472f1c1c18c
//car id 2 673389602055984574c1c18c

// user id 673a650b7901aaf66dc016d7
