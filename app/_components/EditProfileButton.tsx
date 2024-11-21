"use client";

import { useFormStatus } from "react-dom";

function EditProfileButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-red-500 px-8 py-4  font-semibold hover:bg-red-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {!pending ? "Update reservation" : "Updating..."}
    </button>
  );
}

export default EditProfileButton;
