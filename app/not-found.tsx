import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 h-full">
      <ExclamationCircleIcon className="h-20 w-20  mb-6 text-red-500" />
      <h1 className="text-5xl font-bold text-red-500  mb-4">Page Not Found</h1>
      <p className="text-lg  mb-8 ">
        We couldn&apos;t find the page you were looking for. It might have been
        removed, renamed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
