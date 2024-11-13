function ReservationForm() {
  // CHANGE
  const maxCapacity = 10;

  return (
    <div className="scale-[1.01]">
      <div className="bg-gray-800 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        {/* <div className='flex gap-4 items-center'>
            <img
              // Important to display google profile images
              referrerPolicy='no-referrer'
              className='h-8 rounded-full'
              src={user.image}
              alt={user.name}
            />
            <p>{user.name}</p>
          </div> */}
      </div>

      <form className="bg-gray-900 py-10 px-16 text-lg flex gap-5 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many passengers?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of passengers...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-gray-700  w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className=" text-base">Start by selecting dates</p>

          <button className="inline-block px-6 py-3 bg-red-600 font-semibold rounded-lg shadow hover:bg-red-700 transition-all duration-300 ease-in-out">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
