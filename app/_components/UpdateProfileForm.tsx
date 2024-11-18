"use client";

import Image from "next/image";
import { UpdateProfileFormProps } from "./types";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";

function UpdateProfileForm({ children, user }: UpdateProfileFormProps) {
  const { name, email, drivingLicense, countryFlag } = user;

  return (
    <form
      action={updateProfile}
      className="bg-gray-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={name}
          name="name"
          disabled
          className="px-5 py-3 bg-gray-700 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-400 focus:outline-gray-600 focus:outline-none "
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-400 focus:outline-gray-600 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="country">Your nationality</label>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-end">
            <Image
              width={30}
              height={30}
              src={countryFlag ?? ""}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>
          {children}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="drivingLicense">Driver&apos;s License Number</label>
        <input
          name="drivingLicense"
          defaultValue={drivingLicense}
          className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm focus:outline-gray-600 focus:outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-200 ease-in-out rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 "
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}

export default UpdateProfileForm;
