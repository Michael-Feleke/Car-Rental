"use client";

// import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { DateSelectorProps } from "./types";
import { useReservation } from "./ReservationContext";

// function isAlreadyBooked(range: DateRange, datesArr: Date[]) {
//   return (
//     range.from &&
//     range.to &&
//     datesArr.some((date) =>
//       isWithinInterval(date, { start: range.from, end: range.to })
//     )
//   );
// }

function DateSelector({ setting }: DateSelectorProps) {
  const { minRentDuration, maxRentDuration } = setting;

  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numberOfDays = 23;
  const carPrice = 23;

  return (
    <div className="flex flex-col justify-between border border-gray-700">
      <DayPicker
        className="pt -12 place-self-center"
        classNames={{
          today: `border-red-500`,
          selected: `bg-red-500 border-red-500 rounded-full text-white`,
        }}
        selected={range}
        onSelect={setRange}
        mode="range"
        min={minRentDuration + 1}
        max={maxRentDuration}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
      />

      <div className="flex items-center justify-between px-8 bg-gray-600  h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numberOfDays ? (
            <>
              <p className=" px-3 py-2 bg-gray-800 text-2xl">
                <span>&times;</span> <span>{numberOfDays}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${carPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-red-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear,
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
