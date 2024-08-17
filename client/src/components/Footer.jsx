import React from "react";
import ChurchLogo from "../assets/images/Christian Church Logo (1) 1.svg";
import LineMark from "../assets/images/LineMark.svg";
import waves from "../assets/images/Frame 28.png";
import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import ArrowRight from "../assets/images/ArrowRight.svg";
import earth from "../assets/images/earth.svg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";

const Footer = () => {
  return (
    // Footer container that takes the full width and height of the screen
    <div className="w-full h-[396px] relative bg-[#1b1d21]">
      {/* Waves section at the bottom of the footer */}
      <div className="w-full h-[82.88px] absolute bottom-0">
        <img src={waves} alt="waves" className="w-full" />
        <div className="absolute mb-2 left-1/2 bottom-0 transform -translate-x-1/2 text-center text-white text-[13px] font-normal font-['Poppins'] leading-[10px]">
          © 2023 All rights reserved
        </div>
      </div>

      {/* Contact Section */}
      <div className="absolute left-[77%] top-[20%] flex flex-col gap-[13px]">
        <div className="flex flex-col gap-4">
          <div className="text-white text-base font-medium font-['Poppins'] leading-[13px]">
            Contact
          </div>
          <div className="flex gap-[13px]">
            <div className="w-[33px] h-[7px] relative">
              <img className="w-[38px]" src={LineMark} alt="linemark" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <img
              className="w-[25px] h-[25px]"
              src={earth}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              Praisemelodies.org
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <img
              className="w-[25px] h-[25px]"
              src={email}
              alt="icon"
            />
            <div className="text-[#e3e3e3] text-[22px] font-normal font-['Inria Sans'] capitalize">
               care@betterdignity.org
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <img
              className="w-[25px] h-[25px]"
              src={phone}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              +20 120 236 2474
            </div>
          </div>
        </div>
      </div>

      {/* Developed By Section */}
      <div className="absolute left-[57.5%] top-[20%] flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4">
          <div className="text-white text-base font-medium font-['Poppins'] leading-[13px]">
            Developed By
          </div>
          <img className="w-[38px]" src={LineMark} alt="linemark" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <img
              className="w-[15px] h-[15px] mb-3"
              src={ArrowRight}
              alt="icon"
            />
            <div className="relative">
              <div className="mt-2 text-white text-base font-medium font-['Poppins'] capitalize">
                Mina Samy{" "}
              </div>
              <div className="text-white text-[13px] font-normal font-['Poppins']">
                8 Aug, 2024
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <img
              className="w-[15px] h-[15px] mb-3"
              src={ArrowRight}
              alt="icon"
            />
            <div className="relative">
              <div className="mt-2 text-white text-base font-medium font-['Poppins'] capitalize">
                Hany Kamal
              </div>
              <div className="text-white text-[13px] font-normal font-['Poppins']">
                8 Aug, 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="absolute left-[40%] top-[20%] flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="text-white text-base font-medium font-['Poppins'] capitalize leading-[13px]">
            Quick link
          </div>
          <img src={LineMark} alt="linemark" className="w-[38px]"/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-end gap-1.5">
            <img
              className="w-[13px] h-[13px]"
              src={ArrowRight}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              Home
            </div>
          </div>
          <div className="flex items-end gap-1.5">
            <img
              className="w-[13px] h-[13px]"
              src={ArrowRight}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              About us
            </div>
          </div>
          <div className="flex items-end gap-1.5">
            <img
              className="w-[13px] h-[13px]"
              src={ArrowRight}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              Services
            </div>
          </div>
          <div className="flex items-end gap-1.5">
            <img
              className="w-[13px] h-[13px]"
              src={ArrowRight}
              alt="icon"
            />
            <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-[13px]">
              Product
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute left-[10%] top-[20%] flex flex-col gap-5">
        <div className="flex flex-col gap-6">
          <img
            src={ChurchLogo}
            alt="weblogo"
            className="w-[333px] h-[51px]"
          />
          <div className="w-[306px] h-[71px] text-white text-base font-light font-['Poppins'] leading-[30px]">
            Arabic translated & transliterated songs
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="w-[35px] h-[35px] relative">
            <div className="w-[35px] h-[35px] bg-white rounded-full absolute" />
            <img
              className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
              src={facebook}
              alt="icon"
            />
          </div>
          <div className="w-[35px] h-[35px] relative">
            <div className="w-[35px] h-[35px] bg-white rounded-full absolute" />
            <img
              className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
              src={twitter}
              alt="icon"
            />
          </div>
          <div className="w-[35px] h-[35px] relative">
            <div className="w-[35px] h-[35px] bg-white rounded-full absolute" />
            <img
              className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
              src={instagram}
              alt="icon"
            />
          </div>
          <div className="w-[35px] h-[35px] relative">
            <div className="w-[35px] h-[35px] bg-white rounded-full absolute" />
            <img
              className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
              src={youtube}
              alt="icon"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
