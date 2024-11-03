import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Malik Hunain | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <Link href="#home">
            <FaArrowUp />
          </Link>
        </div>
      </footer>
    </div>
  );
}
