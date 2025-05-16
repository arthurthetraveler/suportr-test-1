import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/images/logo.png";
import { Colors } from "../Colors";
import { Link } from "react-router";
import Button from "../button";
import CountdownTimer from "../countdown/headertimer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 left-0 w-full h-5 bg-opacity-90 z-50 ">
      <nav
        style={{ backgroundColor: Colors.primaryBlue }}
        className=" flex items-center justify-between px-4 md:px-6 lg:px-6 py-2 md:py-4 lg:py-4 max-w-screen-xl mx-auto rounded-md mt-3 w-[90%] md:w-full lg:w-full z-50"
      >
        <a href=".">
          <img src={Logo} alt="Brand Logo" className="h-12 md:h-12 lg:h-12" />
        </a>

        <div className="text-white text-sm p-0 font-mono">
        <CountdownTimer />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link className="text-white font-semibold" to=".">
            Home
          </Link>
          <Link className="text-white font-semibold" to=".">
            White Paper
          </Link>
          <Link
            className="text-white font-semibold"
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
            className="text-white font-semibold"
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
          <Button
            className="text-white"
            text="Join the Presale Now"
            style={{ backgroundColor: Colors.primaryRed }}
          />
        </div>

        <div className="flex items-center gap-6 md:hidden ">
          <Button
            className="text-white px-3 py-3"
            text="Join the Presale Now"
            style={{ backgroundColor: Colors.primaryRed }}
          />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Icon icon="mdi:close" color="white" width="30" height="30" />
            ) : (
              <Icon icon="mdi:menu" color="white" width="30" height="30" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-primaryBlue flex flex-col  gap-6 z-0"
          style={{ backgroundColor: Colors.primaryBlue }}
        >
          <nav
            style={{ backgroundColor: Colors.primaryBlue }}
            className=" flex items-center justify-between px-4 md:px-6 lg:px-6 py-2 md:py-4 lg:py-4 max-w-screen-xl mx-auto rounded-md mt-3 w-[90%] md:w-full lg:w-full z-50"
          >
            <a href=".">
              <img
                src={Logo}
                alt="Brand Logo"
                className="h-7 md:h-10 lg:h-10"
              />
            </a>

          

            <div className="flex items-center gap-6 md:hidden ">
              <Button
                className="text-white px-3 py-3"
                text="Join the Presale Now"
                style={{ backgroundColor: Colors.primaryRed }}
              />
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <Icon icon="mdi:close" color="white" width="30" height="30" />
                ) : (
                  <Icon icon="mdi:menu" color="white" width="30" height="30" />
                )}
              </button>
            </div>
          </nav>
          <div className="flex flex-col items-center gap-10 mt-10">
            <Link
              className="text-white font-extrabold text-4xl uppercase"
              to="."
              onClick={() => setMenuOpen(false)}
            >
              White Paper
            </Link>
            <Link
              className="text-white font-extrabold  text-4xl uppercase"
              to="#community"
              onClick={() => setMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              className="text-white font-extrabold  text-4xl uppercase"
              to="#faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              className="text-white font-extrabold  text-4xl uppercase"
              to="."
              onClick={() => setMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white font-extrabold  text-4xl uppercase"
              to="."
              onClick={() => setMenuOpen(false)}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
