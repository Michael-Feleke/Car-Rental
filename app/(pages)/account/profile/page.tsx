import { MetaTitles } from "@/app/_utils/enums";
import { Metadata } from "next";

import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { getUser } from "@/app/_services/user";
import { getSession } from "@/app/_utils/helpers/getSession";

export const metadata: Metadata = {
  title: MetaTitles.Profile,
};

export default async function Page() {
  const session = await getSession();
  const email = session?.user?.email ?? "";
  const user = await getUser(email);
  const plainUser = user ? JSON.parse(JSON.stringify(user)) : null;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-4">
        Update your driver profile
      </h2>

      <p className="text-lg mb-8">
        Providing the following information will make your rental process faster
        and smoother. We can&apos;t wait to hand over the keys!
      </p>
      <UpdateProfileForm user={plainUser}>
        <SelectCountry
          name="country"
          id="country"
          className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm focus:outline-gray-600 focus:outline-none"
          defaultCountry={user?.country}
        />
      </UpdateProfileForm>
    </div>
  );
}
