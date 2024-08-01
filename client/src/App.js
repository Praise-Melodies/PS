import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "./components/Header";
import SongsList from "./components/SongsList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState(1); // Pagination for fetching more songs
  const dropdownRef = useRef(null);

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.trim() !== "") {
      try {
        const response = await axios.get("/api/ArbSongs/searchForArbSong", {
          params: { query: e.target.value },
        });
        setSearchResults(response.data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const clickSearchResult = (result) => {
    setSelectedSong(result); // Set the selected song here
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const loadMoreSongs = async () => {
    try {
      const response = await axios.get("/api/ArbSongs/searchForArbSong", {
        params: { query: searchValue, page: page + 1 }, // Increment page for pagination
      });
      setSearchResults([...searchResults, ...response.data]);
      setPage(page + 1); // Update page number
    } catch (error) {
      console.error("Error fetching more songs:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="z-10 font-sans text-gray-800 bg-transparent min-h-screen relative">
        <Header />
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-4xl text-center">
          Arabic & English and Transliterated Songs
          <br className="max-md:hidden" />
          <span className="sm:text-6xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
            Praise Melodies
          </span>
        </h1>
        <main>
          {/* Search bar component */}
          <div className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
              className="block w-full rounded-md rounded-bl-none rounded-br-none border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
            />

            {showDropdown && searchResults.length > 0 && (
              <ul
                ref={dropdownRef}
                className="mx-auto w-full max-w-xl border border-gray-300 shadow-lg max-h-60 overflow-y-auto bg-white"
              >
                {searchResults.map((result) => (
                  <li
                    key={result._id}
                    className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                    onClick={() => clickSearchResult(result)}
                  >
                    {result.title}
                  </li>
                ))}
                {/* Load more button */}
                <li className="text-center cursor-pointer text-blue-600 hover:text-blue-800 py-2 border-t border-gray-200" onClick={loadMoreSongs}>
                  عرض المزيد
                </li>
              </ul>
            )}
          </div>
          {/* End of search bar component */}

          {/* SongsList component with selected song */}
          <SongsList song={selectedSong} />

          <Footer/>
        </main>
      </div>
    </>
  );
}

export default App;
