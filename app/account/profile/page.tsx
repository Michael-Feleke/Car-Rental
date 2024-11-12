import { MetaTitles } from "@/app/_utils/enums";
import { Metadata } from "next";

import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata: Metadata = {
  title: MetaTitles.Profile,
};

export default function Page() {
  const nationality = "Ethiopia";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-red-500 mb-4">
        Update your driver profile
      </h2>

      <p className="text-lg mb-8">
        Providing the following information will make your rental process faster
        and smoother. We can&apos;t wait to hand over the keys!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm focus:outline-gray-600 focus:outline-none"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
