"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Filter() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState(searchParams.get("capacity") || "");

  const handleFilter = (filter: string) => {
    setFilter(filter);

    const params = new URLSearchParams(searchParams);
    if (filter === "") {
      params.delete("capacity");
      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
      return;
    }
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-gray-800 flex">
      <button
        className={`px-5 py-2 hover:bg-gray-700 ${
          filter === "" ? "bg-gray-700" : ""
        }`}
        onClick={() => handleFilter("")}
      >
        All Cars
      </button>
      <button
        className={`px-5 py-2 hover:bg-gray-700 ${
          filter === "small" ? "bg-gray-700" : ""
        }`}
        onClick={() => handleFilter("small")}
      >
        1 - 4 passengers
      </button>
      <button
        className={`px-5 py-2 hover:bg-gray-700 ${
          filter === "medium" ? "bg-gray-700" : ""
        }`}
        onClick={() => handleFilter("medium")}
      >
        5 - 6 passengers
      </button>
      <button
        className={`px-5 py-2 hover:bg-gray-700 ${
          filter === "large" ? "bg-gray-700" : ""
        }`}
        onClick={() => handleFilter("large")}
      >
        &gt;7
      </button>
    </div>
  );
}

export default Filter;
