import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner component
import backImg from "../assets/images/background-img.png";
import mainImg from "../assets/images/mainImg.png";
import logo from "../assets/images/logo.png";
import Overview from "./Overview";
import ArSong from "./ArSong";
import TranslatedSong from "./TranslatedSong";
import TransliteratedSong from "./TransliteratedSong";

const SongDetail = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const [activeTab, setActiveTab] = useState("overview"); // Manage the active tab
  const [song, setSong] = useState(null); // State to hold song data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`/api/ArbSongs/getArbSongBySongID/${id}`);
        setSong(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching song data:", err.response ? err.response.data : err.message);
        setError("Error fetching song data");
        setLoading(false);
      }
    };

    fetchSong();
  }, [id]);

  // Handler to set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#ffbb02" size={50} />
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-[1459px] h-[full] pl-[7px] pr-1 pb-[20px] bg-[#1e1e1e] rounded-[29.17px] border-[#1e1e1e] flex-col justify-start items-start gap-[11px] inline-flex">
      {/* Background section with gradient and main image */}
      <div className="w-[1448px] h-[400px] relative flex-col justify-start items-start flex">
        {/* Gradient background */}
        <div className="w-[1452.31px] h-[400px] bg-gradient-to-b from-neutral-950 to-neutral-950">
          <img src={backImg} alt="Background" />
        </div>

        {/* Song info section */}
        <div className="w-[1030px] h-[300px] relative bottom-[300px] left-[50px]">
          {/* Main image */}
          <div className="w-[270px] h-[270px] absolute left-0 top-0 shadow justify-end items-center inline-flex">
            <img src={mainImg} alt="Main" />
          </div>

          {/* Stats */}
          <div className="h-[30px] pb-10 flex items-center gap-2 absolute left-[300px] top-[260px]">
            {/* Logo */}
            <img src={logo} alt="Logo" />

            {/* Title */}
            <div className="text-white text-lg font-bold font-['Poppins'] tracking-tight">
              {song.title}
            </div>

            {/* Separator */}
            <div className="w-[5px] h-[5px] bg-white rounded-full" />

            {/* Likes */}
            <div className="text-white text-lg font-black font-['Poppins'] tracking-tight">
              {song.likes} likes
            </div>

            {/* Separator */}
            <div className="w-[5px] h-[5px] bg-white rounded-full" />

            {/* Duration */}
            <div className="text-white/70 text-lg font-black font-['Poppins'] tracking-tight">
              {song.duration}
            </div>
          </div>

          {/* Title */}
          <div
            className="w-[1000px] h-[140px] absolute left-[308px] top-[37px] text-white font-black font-['Poppins']"
            style={{ fontSize: "clamp(1rem, 4vw, 122px)" }}
          >
            {song.title}
          </div>

          {/* Subtitle */}
          <div className="w-[200px] h-[22px] absolute left-[308px] top-[15px] text-white text-base font-medium font-['Poppins']">
            {song.subtitle}
          </div>

          {/* Description */}
          <div className="w-[600px] h-[30px] absolute left-[318px] top-[204px] opacity-70 text-white text-xl font-black font-['Poppins']">
            {song.description}
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="w-full flex flex-col">
        <div className="flex">
          {/* Tabs */}
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              activeTab === "overview" ? "text-[#ffbb02]" : "text-[#cccccc]"
            } border-b-2 ${
              activeTab === "overview"
                ? "border-[#ffbb02]"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              activeTab === "arabic" ? "text-[#ffbb02]" : "text-[#cccccc]"
            } border-b-2 ${
              activeTab === "arabic" ? "border-[#ffbb02]" : "border-transparent"
            }`}
            onClick={() => handleTabClick("arabic")}
          >
            Arabic Lyrics
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              activeTab === "translated" ? "text-[#ffbb02]" : "text-[#cccccc]"
            } border-b-2 ${
              activeTab === "translated"
                ? "border-[#ffbb02]"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("translated")}
          >
            Translated Lyrics
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              activeTab === "transliterated"
                ? "text-[#ffbb02]"
                : "text-[#cccccc]"
            } border-b-2 ${
              activeTab === "transliterated"
                ? "border-[#ffbb02]"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick("transliterated")}
          >
            Transliterated Lyrics
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              activeTab === "chords" ? "text-[#ffbb02]" : "text-[#cccccc]"
            } border-b-2 ${
              activeTab === "chords" ? "border-[#ffbb02]" : "border-transparent"
            }`}
            onClick={() => handleTabClick("chords")}
          >
            Chords
          </div>
        </div>

        {/* Render the content based on active tab */}
        <div className="w-full mt-4">
          {activeTab === "overview" && <Overview song={song} />}
          {activeTab === "arabic" && <ArSong song={song} />}
          {activeTab === "translated" && <TranslatedSong song={song} />}
          {activeTab === "transliterated" && <TransliteratedSong song={song} />}
          {activeTab === "chords" && (
            <div className="text-white">Chords content goes here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
