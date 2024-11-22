import { Metadata } from "next";
import { MetaTitles } from "../../_utils/enums";
import { getSession } from "@/app/_utils/helpers/getSession";

export const metadata: Metadata = {
  title: MetaTitles.Account,
};

async function page() {
  const session = await getSession();
  return (
    <h2 className="text-2xl  text-red-500">Welcome, {session?.user?.name}</h2>
  );
}

export default page;
