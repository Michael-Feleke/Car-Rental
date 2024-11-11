import { Metadata } from "next";
import { MetaTitles } from "../_utils/enums";

export const metadata: Metadata = {
  title: MetaTitles.Account,
};

function page() {
  return <h2 className="text-2xl  text-red-500">Welcome, Michael</h2>;
}

export default page;
