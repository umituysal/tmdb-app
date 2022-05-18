import React, { useState } from "react";
import Logo from "../images/logo.svg";
import {
  HiPlus,
  HiBell,
  HiSearch,
  HiMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#032541" }}>
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center justify-between md:justify-start w-full">
          <a href="/">
            {" "}
            <img src={Logo} alt="logo" className="w-36 h-10 mr-10" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center">
              <li className="pr-8">
                <a href="/#" className="text-white">
                  Filmler
                </a>
              </li>
              <li className="pr-8">
                <a href="/#" className="text-white">
                  Diziler
                </a>
              </li>
              <li className="pr-8">
                <a href="/#" className="text-white">
                  Kişiler
                </a>
              </li>
              <li className="pr-8">
                <a href="/#" className="text-white">
                  Daha Fazla
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden block" onClick={() => setOpen(!open)}>
            {open ? (
              <HiOutlineX className="text-white h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="text-white h-6 w-6" />
            )}
          </div>
        </div>

        <ul className="md:flex md:items-center hidden">
          <li className="text-white pr-8">
            <HiPlus />
          </li>
          <li className="text-white pr-8">
            <HiBell />
          </li>
          <li className="text-white">
            <HiSearch />
          </li>
        </ul>

        {open ? (
          <div className="absolute bg-dark-blue w-full top-20 left-0 -mt-2 z-50 -px-10 md:hidden">
            <nav className="flex justify-center">
              <ul className="flex flex-col mx-auto items-center leading-10 text-white w-full">
                <li className="menu-hover">
                  <a href="/#">Filmler</a>
                </li>
                <li className="menu-hover">
                  <a href="/#">Diziler</a>
                </li>
                <li className="menu-hover">
                  <a href="/#">Kişiler</a>
                </li>
                <li className="menu-hover">
                  <a href="/#">Daha Fazla</a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
