import React, { useState, useEffect } from "react";
import axios from "axios";
import { SiMicrosofttranslator } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./styleLoader.css"; // Import the CSS file

const Section = ({ song }) => {
  const [frankSong, setFrankSong] = useState(null);
  const [activeVerseIndex, setActiveVerseIndex] = useState(-1);
  const [activeLineIndex, setActiveLineIndex] = useState(-1); // New state for active line index
  const [englishSong, setEnglishSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("Choose Language");

  useEffect(() => {
    if (song) {
      setFrankSong(null);
      setEnglishSong(null);
    }
  }, [song]);

  const handleTransliteration = async (songID) => {
    try {
      if (!frankSong) {
        const response = await axios.get(
          `/api/FrankSongs/getFrankSongBySongID/${songID}`
        );
        setFrankSong(response.data);
      }
    } catch (error) {
      console.error("Error fetching Frank Song:", error);
      setError("Error fetching Frank Song. Please try again later.");
      setFrankSong(null);
    }
  };

  const handleTranslateToEnglish = async (song) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/ArbSongs/translateToEnglish/${song.songID}`
      );
      setEnglishSong(response.data);
    } catch (error) {
      console.error("Error translating song:", error);
      setError("Error translating song. Please try again later.");
      setEnglishSong(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (verseIndex, lineIndex) => {
    if (verseIndex === activeVerseIndex && lineIndex === activeLineIndex) {
      setActiveVerseIndex(-1);
      setActiveLineIndex(-1);
    } else {
      setActiveVerseIndex(verseIndex);
      setActiveLineIndex(lineIndex);
    }
  };

  const handleCloseSongs = () => {
    setFrankSong(null);
    setEnglishSong(null);
    setSelectedLanguage("Choose Language"); // Reset dropdown value
    setActiveVerseIndex(-1);
    setActiveLineIndex(-1);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownOptionClick = (option) => {
    setSelectedLanguage(option);
    setDropdownOpen(false); // Close dropdown after selection
    if (option === "Transliteration") {
      handleTransliteration(song.songID);
      setEnglishSong(null); // Clear English translation
    } else if (option === "Translation") {
      handleTranslateToEnglish(song);
      setFrankSong(null); // Clear transliteration
    }
  };

  if (!song) {
    return <div>No song selected</div>;
  }

  return (
    <div className="bg-white p-6 m-5 rounded-lg shadow-lg w-2/5 transition-transform duration-300 hover:translate-y-[-0.3125rem] hover:shadow-2xl">
      <div className="p-4 flex justify-between items-center relative">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-orange-500 focus:outline-none"
          >
            {selectedLanguage === "Choose Language" ? (
              <>
                <IoMdOptions className="mr-4" /> Choose Language{" "}
                <IoIosArrowDown className="ml-1" />
              </>
            ) : (
              <>
                {selectedLanguage === "Transliteration" ? (
                  <SiMicrosofttranslator className="inline-block w-4 h-4 mr-4" />
                ) : (
                  <RiEnglishInput className="inline-block w-4 h-4 mr-4" />
                )}
                {selectedLanguage} <IoIosArrowDown className="ml-1" />
              </>
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={() => handleDropdownOptionClick("Transliteration")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <SiMicrosofttranslator className="inline-block w-6 h-6 mr-2" />
                  Transliteration
                </button>
                <button
                  onClick={() => handleDropdownOptionClick("Translation")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <RiEnglishInput className="inline-block w-6 h-6 mr-2" />
                  Translation
                </button>
              </div>
            </div>
          )}
        </div>

        {(frankSong || englishSong) && (
          <AiOutlineCloseCircle
            className="w-6 h-6 text-red-500 cursor-pointer"
            onClick={handleCloseSongs}
          />
        )}
      </div>

      <div className="px-4">
        <h2 className="text-2xl text-orange-500 mb-4">{song.title}</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader"></div> {/* Loader */}
          </div>
        ) : (
          <>
            {error && <div className="text-red-500">{error}</div>}

            {englishSong && (
              <div className="border-t-2 border-gray-200 pt-4">
                <h3 className="text-xl text-gray-700 mb-2">
                  English Translation:
                </h3>
                <h2 className="text-lg text-orange-500 mb-4">
                  {englishSong.title}
                </h2>
                {Array.isArray(englishSong.chorus) && (
                  <div>
                    <h3 className="text-lg text-gray-700 mb-2">Chorus:</h3>
                    {englishSong.chorus.map((line, index) => (
                      <div
                        key={index}
                        className={`text-gray-700 text-left my-2 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                          activeVerseIndex === -1 && activeLineIndex === index
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() => handleClick(-1, index)}
                      >
                        <div className="mt-2 p-4 font-extrabold text-xl hover:bg-gray-200">
                          {line.split("\n").map((subLine, subIndex) => (
                            <p key={`${line}-${subIndex}`} className="">
                              {subLine.trim() !== "" ? subLine : <br />}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {Array.isArray(englishSong.verses) &&
                  englishSong.verses.map((verse, verseIndex) =>
                    verse.map((line, lineIndex) => (
                      <div
                        key={`${verseIndex}-${lineIndex}`}
                        className={`text-gray-700 text-left my-2 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                          activeVerseIndex === verseIndex &&
                          activeLineIndex === lineIndex
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() => handleClick(verseIndex, lineIndex)}
                      >
                        <div className="mt-2 p-4 font-extrabold text-xl hover:bg-gray-200">
                          {lineIndex === 0 && (
                            <span className="text-orange-500 text-2xl float-left mr-2">
                              ({verseIndex + 1})
                            </span>
                          )}
                          {line.split("\n").map((subLine, subIndex) => (
                            <p key={`${lineIndex}-${subIndex}`} className="">
                              {subLine.trim() !== "" ? subLine : <br />}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
              </div>
            )}

            {frankSong && (
              <div className="border-t-2 border-gray-200 pt-4">
                <h3 className="text-xl text-gray-700 mb-2">Frank Song:</h3>
                <h2 className="text-lg text-orange-500 mb-4">
                  {frankSong.title}
                </h2>
                {Array.isArray(frankSong.chorus) && (
                  <div>
                    <h3 className="text-lg text-gray-700 mb-2">Chorus:</h3>
                    {frankSong.chorus.map((line, index) => (
                      <div
                        key={index}
                        className={`text-gray-700 text-left my-2 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                          activeVerseIndex === -1 && activeLineIndex === index
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() => handleClick(-1, index)}
                      >
                        <div className="mt-2 p-4 font-extrabold text-xl hover:bg-gray-200">
                          {line.split("\n").map((subLine, subIndex) => (
                            <p key={`${line}-${subIndex}`} className="">
                              {subLine.trim() !== "" ? subLine : <br />}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {Array.isArray(frankSong.verses) &&
                  frankSong.verses.map((verse, verseIndex) =>
                    verse.map((line, lineIndex) => (
                      <div
                        key={`${verseIndex}-${lineIndex}`}
                        className={`text-gray-700 text-left my-2 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                          activeVerseIndex === verseIndex &&
                          activeLineIndex === lineIndex
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() => handleClick(verseIndex, lineIndex)}
                      >
                        <div className="mt-2 p-4 font-extrabold text-xl hover:bg-gray-200">
                          {lineIndex === 0 && (
                            <span className="text-orange-500 text-2xl float-left mr-2">
                              ({verseIndex + 1})
                            </span>
                          )}
                          {line.split("\n").map((subLine, subIndex) => (
                            <p key={`${lineIndex}-${subIndex}`} className="">
                              {subLine.trim() !== "" ? subLine : <br />}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
              </div>
            )}

            {Array.isArray(song.chorus) && (
              <div className="border-t-2 border-gray-200 pt-4">
                <h3 className="text-xl text-gray-700 mb-2">
                  Arabic Song Chorus:
                </h3>
                <div className="text-right">
                  {song.chorus.map((line, index) => (
                    <p
                      key={index}
                      className={`text-gray-700 p-4 my-2 hover:bg-gray-200 font-extrabold rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                        activeVerseIndex === -1 && activeLineIndex === index
                          ? "bg-gray-100"
                          : ""
                      }`}
                      onClick={() => handleClick(-1, index)}
                    >
                      {line.split("\n").map((subLine, subIndex) => (
                        <p key={`${line}-${subIndex}`}>
                          {subLine.trim() !== "" ? subLine : <br />}
                        </p>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(song.verses) &&
              song.verses.map((verse, verseIndex) =>
                verse.map((line, lineIndex) => (
                  <div
                    key={`${verseIndex}-${lineIndex}`}
                    className={`text-gray-700 text-right my-2 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                      activeVerseIndex === verseIndex &&
                      activeLineIndex === lineIndex
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => handleClick(verseIndex, lineIndex)}
                  >
                    <div className="mt-2 p-4 font-extrabold text-xl hover:bg-gray-200">
                      {lineIndex === 0 && (
                        <span className="text-orange-500 text-2xl float-right ml-2">
                          ({verseIndex + 1})
                        </span>
                      )}
                      {line.split("\n").map((subLine, subIndex) => (
                        <p key={`${lineIndex}-${subIndex}`} className="">
                          {subLine.trim() !== "" ? subLine : <br />}
                        </p>
                      ))}
                    </div>
                  </div>
                ))
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
