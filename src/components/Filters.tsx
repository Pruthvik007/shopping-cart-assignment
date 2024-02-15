import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { FilterType } from "../types/DummyJsonServiceTypes";

type FiltersProps = {
  setFilters: (
    filter: FilterType | ((state: FilterType) => FilterType)
  ) => void;
};

const Filters = ({ setFilters }: FiltersProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedValue = useDebounce(searchTerm);
  useEffect(() => {
    setFilters((state: FilterType) => ({
      ...state,
      searchTerm: debouncedValue,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <div className="p-3 flex justify-center gap-5 mt-3">
        <label
          htmlFor="search-term"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only"
        >
          Search Products
        </label>
        <input
          type="text"
          id="search-term"
          name="searchTerm"
          value={searchTerm}
          onChange={onFilterChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xl"
          placeholder="Search Products..."
          required
        />
      </div>
    </div>
  );
};

export default Filters;
