import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Section from "./Section";

const SongsList = ({ song }) => {
  const [songsList, setSongsList] = useState([]);
  const [activeSong, setActiveSong] = useState(null);

  const handleClick = (clickedSong) => {
    setActiveSong(clickedSong);
  };

  const handleDelete = (id) => {
    const updatedSongsList = songsList.filter((song) => song._id !== id);
    setSongsList(updatedSongsList);

    if (activeSong && activeSong._id === id) {
      setActiveSong(null);
    }
  };

  useEffect(() => {
    if (song && !songsList.some((s) => s._id === song._id)) {
      setSongsList((prevSongsList) => [...prevSongsList, song]);
      setActiveSong(song);
    }
  }, [song]);

  return (
    <>
      {songsList.length > 0 && (
        <section className="flex flex-wrap justify-around">
          <Section song={activeSong} />

          <div className="bg-white p-6 m-5 rounded-lg shadow-lg w-2/5 transition-transform duration-300 hover:translate-y-[-0.3125rem] hover:shadow-2xl">
            {songsList.map((song) => (
              <div
                key={song._id}
                className={`flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-md ${
                  activeSong && activeSong._id === song._id ? "bg-blue-100" : ""
                }`}
              >
                <h2
                  className={`cursor-pointer ${
                    activeSong && activeSong._id === song._id ? "font-bold" : ""
                  }`}
                  onClick={() => handleClick(song)}
                >
                  {song.title}
                </h2>
                <MdDelete
                  className="text-2xl text-red-500 cursor-pointer ml-4"
                  onClick={() => handleDelete(song._id)}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default SongsList;
