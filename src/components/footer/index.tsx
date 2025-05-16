import React from "react";
import { Colors } from "../Colors";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import AutoScrollingLeaderboard from "../footer/AutoScrollingLeaderBoardFooter";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: Colors.primaryBlack }}
      className=" flex flex-col justify-between  w-full  z-10 py-10"
    >
       
        <AutoScrollingLeaderboard />
        
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row px-5 md:px-20 text-center md:text-start gap-5 md:gap-20 justify-between">
        <p className="text-white text-xl">
          ©Suportr League 2024. All rights reserved
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <Link className="text-white text-xl" to=".">
            White Paper
          </Link>
          <Link
            className="text-white text-xl"
            to="#community"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("community")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Community
          </Link>
          <Link
            className="text-white text-xl"
            to="#faq"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            FAQ
          </Link>
          <Link className="text-white text-xl" to=".">
            Privacy Policy
          </Link>
          <Link className="text-white text-xl" to=".">
            Terms of use
          </Link>
        </div>
      </div>
    </div>
  );
}
