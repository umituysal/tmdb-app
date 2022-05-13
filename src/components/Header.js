import React from "react";
import Logo from "../images/logo.svg";
import { HiPlus, HiBell, HiSearch } from "react-icons/hi";
function Header() {
  return (
    <header style={{ backgroundColor: "#032541" }}>
      <div className="container mx-auto p-4  px-10 flex items-center justify-between">
        <nav>
          <ul className="flex items-center">
            <li className="pr-8">
             <a href="/"> <img src={Logo} alt="logo" className="w-36 h-10" /></a>
            </li>
            <li className="pr-8">
              <a href="/#" className="text-white">
                Movies
              </a>
            </li>
            <li className="pr-8">
              <a href="/#" className="text-white">
                TV Shows
              </a>
            </li>
            <li className="pr-8">
              <a href="/#" className="text-white">
                People
              </a>
            </li>
            <li className="pr-8">
              <a href="/#" className="text-white">
                More
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex items-center">
            <li className="text-white pr-8">
              <HiPlus />
            </li>
            <li className="text-white pr-8">
              <HiBell />
            </li>
            <li className="text-white pr-8">
              <HiSearch />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
