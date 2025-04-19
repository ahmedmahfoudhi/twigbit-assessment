import React from "react";

interface SearchProps {
  searchItem: string;
  setSearchItem: (searchItem: string) => void;
}

const Search = ({ searchItem, setSearchItem }: SearchProps) => {
  return (
    <div className="flex-2">
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Search for products..."
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default Search;
