import { Cog6ToothIcon } from "@heroicons/react/24/solid";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex items-center">
        <Cog6ToothIcon className="h-16 w-16 text-red-600 animate-spin" />
        <span className="ml-3 text-xl font-bold ">Loading...</span>
      </div>
      <p className="mt-2 ">Please wait while we prepare your ride!</p>
    </div>
  );
}

export default Spinner;
