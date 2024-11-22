"use client";

import "react-day-picker/dist/style.css";

import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { DateSelectorProps } from "./types";

function DateSelector({ setting, car, reservations }: DateSelectorProps) {
  const { minRentDuration, maxRentDuration } = setting;
  const { range, setRange, resetRange } = useReservation();
  const { dailyPrice, discount } = car;

  const numberOfDays =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const carPrice = numberOfDays * (dailyPrice - discount);

  const isDateReserved = (date: Date) => {
    return reservations.some((reservedRange) => {
      return (
        reservedRange.from &&
        reservedRange.to &&
        isWithinInterval(date, {
          start: reservedRange.from,
          end: reservedRange.to,
        })
      );
    });
  };

  const disabledDays = [
    {
      before: new Date(),
    },
    (date: Date) => isDateReserved(date),
  ];

  return (
    <div className="flex flex-col p-20 gap-4 justify-between border border-gray-700">
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
        disabled={disabledDays}
      />
      <div className="flex items-center justify-between px-8 bg-gray-600 w-full  h-[72px]">
        <div className="flex justify-between items-center gap-6 w-full">
          <p className="flex gap-2 items-center">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${dailyPrice - discount}</span>
                <span className="line-through font-semibold">
                  ${dailyPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${dailyPrice}</span>
            )}
            <span className="">/day</span>
          </p>
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-red-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
      {numberOfDays > 0 ? (
        <div className="flex items-center justify-between px-8 bg-gray-600 w-full  h-[72px]">
          <p className=" px-3 w-20 py-2 bg-gray-800 text-2xl">
            <span>&times;</span> <span>{numberOfDays}</span>
          </p>
          <p className="mr-2 w-40">
            <span className="text-lg font-bold uppercase">Total=</span>{" "}
            <span className="text-2xl font-semibold">${carPrice}</span>
          </p>
        </div>
      ) : null}{" "}
    </div>
  );
}

export default DateSelector;
