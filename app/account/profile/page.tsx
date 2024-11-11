import SelectCountry from "@/app/_components/SelectCountry";
import { MetaTitles } from "@/app/_utils/enums";
import { Metadata } from "next";

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

      <form className="bg-gray-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="px-5 py-3 bg-gray-700 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-400 focus:outline-gray-600 focus:outline-none "
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-400 focus:outline-gray-600 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Your nationality</label>
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm focus:outline-gray-600 focus:outline-none"
            defaultCountry={nationality}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="licenseNumber">Driver&apos;s License Number</label>
          <input
            name="licenseNumber"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm focus:outline-gray-600 focus:outline-none"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-200 ease-in-out rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 ">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
