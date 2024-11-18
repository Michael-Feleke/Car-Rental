import { Metadata } from "next";
import { MetaTitles } from "../../_utils/enums";
import { auth } from "../../_lib/auth";

export const metadata: Metadata = {
  title: MetaTitles.Account,
};

async function page() {
  const session = await auth();
  return (
    <h2 className="text-2xl  text-red-500">Welcome, {session?.user?.name}</h2>
  );
}

export default page;
