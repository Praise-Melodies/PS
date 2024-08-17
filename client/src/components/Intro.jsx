import React, { useState } from "react";
import arrow2 from "../assets/images/arrow2.svg";
import arrowSlider from "../assets/images/arrowSlider.svg";
import albumsIcon from "../assets/images/albumsIcons.svg";
import translateIcons from "../assets/images/translateIcon.svg";
import songsIcons from "../assets/images/songicon.svg";

const Intro = () => {
  // Set initial state for the slider index
  const [startIndex, setStartIndex] = useState(0);
  const [isLeftIconVisible, setIsLeftIconVisible] = useState(false);

  // Sample images array
  const images = [
    "https://s3-alpha-sig.figma.com/img/9d6a/3d9b/b347e2fe79b1120152ea3289a2b3eb54?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOsbktAgWPUVkwbWR5W7uSM346XMXpRzu3lVeCwrl7XgpAckydkeYMao~9PSiOibhkbUnfhV43kxt0enDyGqxdwLbcXBV4Af91~uDJ~jfrULdCTdmxgS3HpuAcVZ-C-kRDJw6Gvl5dwr6l1ZVJR2wP2WF~QrQJBdBFSZFFQ0nH2t3gxsQpqKqiPU5ipQZPExvnTZ6OeexbGhGcKfu2sWPqS8Suk7U2~~~uoyPAGacQYW2AdEvPOjLuyzdhBPmWZgFk~nc8Qqi8BuI-2ChevaGeHLmVvOinQ2FMq3NkZMst8xkENaiKeIvtbiEU7jPRnTcPIsP5XPU1UzejhAWsnDZQ__",
    "https://s3-alpha-sig.figma.com/img/4705/fe90/5533fc67561e9ef4fd22bc911598f98e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPKX4~2cIGMfA4SqEWR1NUQFeur4NttIipom2Jl4kA3flUwV66J~PudvmpLmp9TPqt1iBt3574bVB1r5dttWEJf4QEnOMFOHvZre-8yxVs0P5fXCUc6m304iLCz8pmzj1hNPQ4fNMARwX6cAN~DV0zEaECrd8OpXRBTpBehXyksCMc5bQt10ivfgCLd7AErztzjeqvDZUURwlq4Z7iQBWI0~6Bh8ZdhJ0Oue2aJ5CLe-s5kMaDWFU2Bwk4N0-Oo2oHdfCsnvyP1vvYSv4nqljPHrcwTp1fEgK4SsZ1tKPTxIkpMpuQunz5RjvAgLEo1gzr~XA0eEWM8DajtK6jBIrg__",
    "https://s3-alpha-sig.figma.com/img/7d9a/5919/cf47f478e2f376f9e11982c565a91145?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLZqw~XDxINiZC7DgMF9B7xUjWCYwUtpLxk4mTRuoH7q2EgqDjKD8FMwofkbABe0sU~gDMM3XvSeW-gCg8y1Lt90iTzW-vsWfWcZRE9ZQ7pMtUtQ87Dm37ssWQOuhGe6cubT-GjxwOR98U8cCtUjtSEUgwLpNihjiO89Yd~LqquBmy8GtIqESb-hiW~oWkJv58ZAJ-LN2GSWSqJfMJY7Q7AsiakhTU59Zge3XWWzly45dxVz0GIqePXfZ68j3oJf95Mw~zfp8e9~i~2ZA674h39gTZG0A7IrhZ7B8W3Y~13oJvLdEC8I-at1hU5RwhCiqd3bHgKKez2MJvt0r5wQvA__",
    "https://s3-alpha-sig.figma.com/img/ce87/8f50/985d940e2a737371cebee528f86dc798?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRtDmm6HDWeuuH4IUqpuaPXY-FASKVocOrrcu3M42t2oPBG5P-os1fQJXEcE~z42doocyejEXKpacpD~KNMjJ1W6~2cvlEsKd55Pf07FJuSTOX0oJEvsMXOz-UrcWwZ-sBzQO5GQLbA01oUBICzQaP46l-FXOCE6c6oX2DEK32XhZPTgxe3x773~~p9d1UC0JBm0iEbKC3J5xJ1m5FI5krphSyHBOeg5aUbGTduKUi7WxP47ABycThrDiiy39Fb9qdJvfwq0MJQgFy4F~JkknUJxFxvrq-Xw2xjNKn6W29BqFPw~kUYaTYm37Q8H25i7sL28-nzW~qlcP8gewo3ySw__",
    "https://s3-alpha-sig.figma.com/img/ce87/8f50/985d940e2a737371cebee528f86dc798?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRtDmm6HDWeuuH4IUqpuaPXY-FASKVocOrrcu3M42t2oPBG5P-os1fQJXEcE~z42doocyejEXKpacpD~KNMjJ1W6~2cvlEsKd55Pf07FJuSTOX0oJEvsMXOz-UrcWwZ-sBzQO5GQLbA01oUBICzQaP46l-FXOCE6c6oX2DEK32XhZPTgxe3x773~~p9d1UC0JBm0iEbKC3J5xJ1m5FI5krphSyHBOeg5aUbGTduKUi7WxP47ABycThrDiiy39Fb9qdJvfwq0MJQgFy4F~JkknUJxFxvrq-Xw2xjNKn6W29BqFPw~kUYaTYm37Q8H25i7sL28-nzW~qlcP8gewo3ySw__",
    "https://s3-alpha-sig.figma.com/img/9d6a/3d9b/b347e2fe79b1120152ea3289a2b3eb54?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOsbktAgWPUVkwbWR5W7uSM346XMXpRzu3lVeCwrl7XgpAckydkeYMao~9PSiOibhkbUnfhV43kxt0enDyGqxdwLbcXBV4Af91~uDJ~jfrULdCTdmxgS3HpuAcVZ-C-kRDJw6Gvl5dwr6l1ZVJR2wP2WF~QrQJBdBFSZFFQ0nH2t3gxsQpqKqiPU5ipQZPExvnTZ6OeexbGhGcKfu2sWPqS8Suk7U2~~~uoyPAGacQYW2AdEvPOjLuyzdhBPmWZgFk~nc8Qqi8BuI-2ChevaGeHLmVvOinQ2FMq3NkZMst8xkENaiKeIvtbiEU7jPRnTcPIsP5XPU1UzejhAWsnDZQ__",
    "https://s3-alpha-sig.figma.com/img/4705/fe90/5533fc67561e9ef4fd22bc911598f98e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPKX4~2cIGMfA4SqEWR1NUQFeur4NttIipom2Jl4kA3flUwV66J~PudvmpLmp9TPqt1iBt3574bVB1r5dttWEJf4QEnOMFOHvZre-8yxVs0P5fXCUc6m304iLCz8pmzj1hNPQ4fNMARwX6cAN~DV0zEaECrd8OpXRBTpBehXyksCMc5bQt10ivfgCLd7AErztzjeqvDZUURwlq4Z7iQBWI0~6Bh8ZdhJ0Oue2aJ5CLe-s5kMaDWFU2Bwk4N0-Oo2oHdfCsnvyP1vvYSv4nqljPHrcwTp1fEgK4SsZ1tKPTxIkpMpuQunz5RjvAgLEo1gzr~XA0eEWM8DajtK6jBIrg__",
    "https://s3-alpha-sig.figma.com/img/7d9a/5919/cf47f478e2f376f9e11982c565a91145?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLZqw~XDxINiZC7DgMF9B7xUjWCYwUtpLxk4mTRuoH7q2EgqDjKD8FMwofkbABe0sU~gDMM3XvSeW-gCg8y1Lt90iTzW-vsWfWcZRE9ZQ7pMtUtQ87Dm37ssWQOuhGe6cubT-GjxwOR98U8cCtUjtSEUgwLpNihjiO89Yd~LqquBmy8GtIqESb-hiW~oWkJv58ZAJ-LN2GSWSqJfMJY7Q7AsiakhTU59Zge3XWWzly45dxVz0GIqePXfZ68j3oJf95Mw~zfp8e9~i~2ZA674h39gTZG0A7IrhZ7B8W3Y~13oJvLdEC8I-at1hU5RwhCiqd3bHgKKez2MJvt0r5wQvA__",
    "https://s3-alpha-sig.figma.com/img/ce87/8f50/985d940e2a737371cebee528f86dc798?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRtDmm6HDWeuuH4IUqpuaPXY-FASKVocOrrcu3M42t2oPBG5P-os1fQJXEcE~z42doocyejEXKpacpD~KNMjJ1W6~2cvlEsKd55Pf07FJuSTOX0oJEvsMXOz-UrcWwZ-sBzQO5GQLbA01oUBICzQaP46l-FXOCE6c6oX2DEK32XhZPTgxe3x773~~p9d1UC0JBm0iEbKC3J5xJ1m5FI5krphSyHBOeg5aUbGTduKUi7WxP47ABycThrDiiy39Fb9qdJvfwq0MJQgFy4F~JkknUJxFxvrq-Xw2xjNKn6W29BqFPw~kUYaTYm37Q8H25i7sL28-nzW~qlcP8gewo3ySw__",
    "https://s3-alpha-sig.figma.com/img/ce87/8f50/985d940e2a737371cebee528f86dc798?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRtDmm6HDWeuuH4IUqpuaPXY-FASKVocOrrcu3M42t2oPBG5P-os1fQJXEcE~z42doocyejEXKpacpD~KNMjJ1W6~2cvlEsKd55Pf07FJuSTOX0oJEvsMXOz-UrcWwZ-sBzQO5GQLbA01oUBICzQaP46l-FXOCE6c6oX2DEK32XhZPTgxe3x773~~p9d1UC0JBm0iEbKC3J5xJ1m5FI5krphSyHBOeg5aUbGTduKUi7WxP47ABycThrDiiy39Fb9qdJvfwq0MJQgFy4F~JkknUJxFxvrq-Xw2xjNKn6W29BqFPw~kUYaTYm37Q8H25i7sL28-nzW~qlcP8gewo3ySw__",
  ];

  // Number of images visible at a time
  const visibleImages = 5;

  // Move slider left
  const slideLeft = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - visibleImages
    );
  };

  // Move slider right
  const slideRight = () => {
    showLeftIcon();
    setStartIndex((prevIndex) =>
      prevIndex < images.length - visibleImages ? prevIndex + 1 : 0
    );
  };

  const showLeftIcon = () => {
    setIsLeftIconVisible(true);
  }

  return (
    <div className="relative pt-20">
      <div className="flex justify-between w-full h-60 relative">
        {/* Text container */}
        <div className="w-[1000px] left-0 top-[0.33px] absolute justify-between items-start inline-flex">
          <div className="flex-col justify-start items-start gap-[8.33px] inline-flex">
            <div className="text-white text-[25px] font-normal font-['Roboto'] capitalize">
              musicians and worshipers{" "}
            </div>
            <div className="text-[#a6a9b8] text-[15px] font-normal font-['Roboto'] capitalize leading-[15.14px]">
              albums and Songs{" "}
            </div>
          </div>
          <div className="justify-center items-center mt-7 gap-2.5 inline-flex">
            <div className="text-right text-[#a6a9b8] text-[15px] font-normal font-['Roboto'] leading-[15.14px]">
              View all
            </div>
            <div className="w-[15px] h-[15px] origin-top-left justify-center items-center flex">
              <img src={arrow2} alt="sendTo" />
            </div>
          </div>
        </div>

        {/* Slider container */}
        <div className="w-[1000px] mt-20 h-[173.33px] rounded-2xl gap-[19.17px] inline-flex">
          {/* Render visible images */}
          {images
            .slice(startIndex, startIndex + visibleImages)
            .map((image, index) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                key={index}
                className="w-[197px] h-[174px] rounded-[9px]"
                src={image}
                alt={`slider-image-${index}`}
              />
            ))}
        </div>

        {/* Left arrow button */}
        <div
          className="left-icon"
          style={{ display: isLeftIconVisible ? "block" : "none" }}
        >
          <div
            className="w-[43.62px] h-[43.62px] left-[-30px] top-[61%] absolute cursor-pointer"
            onClick={slideLeft}
          >
            <div className="w-[43.62px] h-[43.62px] bg-[#343538]/70 rounded-full shadow backdrop-blur-[3.33px] flex justify-center items-center">
              <img className="rotate-180" src={arrowSlider} alt="arrowSlider" />
            </div>
          </div>
        </div>

        {/* Right arrow button */}

        <div
          className="w-[43.62px] h-[43.62px] left-[62%] top-[59%] absolute cursor-pointer"
          onClick={slideRight}
        >
          <div className="w-[43.62px] h-[43.62px] bg-[#343538]/70 rounded-full shadow backdrop-blur-[3.33px] flex justify-center items-center">
            <img src={arrowSlider} alt="arrowSlider" />
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="absolute top-0 pt-20 right-[0%] flex flex-col gap-5 w-[420px]">
        <div className="flex justify-between bg-[#2a2b2e] w-full h-[117px] rounded-xl p-5 items-center">
          <div className="flex items-center gap-3">
            <img src={songsIcons} alt="songsIcon" className="w-8 h-8" />
            <div className="text-white text-lg font-medium font-['Roboto']">
              5652 Songs
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={albumsIcon} alt="albumsIcon" className="w-8 h-8" />
            <div className="text-white text-lg font-medium font-['Roboto']">
              365 Albums
            </div>
          </div>
        </div>

        {/* Right Container Under */}
        <div className="bg-[#2a2b2e] w-full h-[117px] rounded-xl p-5 flex items-center gap-3">
          <img src={translateIcons} alt="translateIcon" className="w-8 h-8" />
          <div className="text-white text-lg font-medium font-['Roboto']">
            Arabic Translated & Transliterated Songs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
