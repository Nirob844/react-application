/* eslint-disable react/prop-types */

import { useState } from "react";

const SearchBar = ({ onSearchChange, onReset }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearchChange(searchTerm);
    };
    const handleReset = () => {
        setSearchTerm('');
        onReset();
    };

    return (
        <div className="m-5 flex items-center">
            <input
                type="text"
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500 flex-grow"
            />
            <button
                onClick={handleSearch}
                className="mx-2 bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none"
            >
                Search
            </button>
            <button
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r hover:bg-gray-400 focus:outline-none"
            >
                Reset
            </button>
        </div>
    );
};

export default SearchBar;