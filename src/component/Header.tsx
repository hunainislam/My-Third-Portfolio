import Link from "next/link";
import React from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <header className="header">
        <Link href="#" className="logo">
          Portfolio
        </Link>
        <nav className="navbar">
          <Link href="#home" className="active">
            Home
          </Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="bx bx-moon" id="darkMode-icon">
          <MdDarkMode />
        </div>
        <div className="bx bx-menu" id="menu-icon">
          <IoMdMenu />
        </div>
      </header>
    </div>
  );
}
