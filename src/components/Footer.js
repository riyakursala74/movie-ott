import React from "react";
import { Link } from "react-router-dom";
import { LINKEDIN_PROFILE } from "../utils/constant";

const Footer = () => {
  return (
    <div className="bg-black py-10 mb-4 md:mb-0">
      <p
        className="text-center text-sm md:text-lg text-white hover:text-blue-300 cursor-pointer hover:underline"
        onClick={() => {
          window.open(LINKEDIN_PROFILE, "_blank").focus();
        }}
      >
        Made by Riya
      </p>
    </div>
  );
};

export default Footer;
