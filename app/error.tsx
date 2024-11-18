"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { ErrorProps } from "./types";

function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-center p-8 shadow-lg rounded-xl max-w-md mx-auto">
      <ExclamationTriangleIcon className="h-16 w-16 text-red-600 mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="mb-2">
        {error.message
          ? error.message
          : "We’re sorry, but it looks like an unexpected error has occurred."}
      </p>
      <button
        onClick={reset}
        className="inline-block bg-red-600  px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
