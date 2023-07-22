import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="flex">
      {isSearchOpen ? (
        <input
          type="search"
          placeholder="Search..."
          onBlur={toggleSearch}
          className="relative m-0 block sm:w-2/3 md:w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          autoFocus
        />
      ) : (
        <IoSearchOutline
          className="text-2xl hover:text-sky-600"
          onClick={toggleSearch}
        />
      )}

      {/* <SearchIcon onClick={toggleSearch} />
      <SearchInput isOpen={isSearchOpen} /> */}
    </div>
  );
};

export default Search;
