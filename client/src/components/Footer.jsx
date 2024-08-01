import React from "react";
import ChurchLogo from "../assets/images/ChristianChurchLogoWithe.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[640px]">
      <div className="container py-10 mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <img
            src={ChurchLogo}
            alt="Company Logo"
            className="mx-auto h-full w-full mb-3"
          />
          <h3 className="text-2xl font-bold text-[#f59a0b]">Praise Melodies</h3>
          <p className="text-sm text-gray-300">
            Arabic & English and Transliterated Songs Praise Melodies.
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} All rights reserved{" "}
            <span className="font-bold text-[#f59a0b]">BetterDignity</span>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Contact us:{" "}
            <a
              href="mailto:care@betterdignity.org"
              className="text-[#f59a0b] hover:text-white"
            >
              care@betterdignity.org
            </a>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Developed by: Hany Kamal & Mina Samy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
