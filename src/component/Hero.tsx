"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoNpm } from "react-icons/io5";
import { RevealWrapper } from "next-reveal";
import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <RevealWrapper
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
        origin="top"
      >
        <section className="home" id="home">
          <div className="home-content">
            <h3>Hello, I am</h3>
            <h1>
              Malik <span>Hunain</span>
            </h1>

            <p>
              As a passionate Web Developer and UI/UX Designer, I specialize in
              creating visually appealing and highly functional websites that
              offer seamless user experiences.
            </p>

            <div className="social-media">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
              >
                <TiSocialLinkedin />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/hunainislam?tab=repositories"}
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href={"https://vercel.com/malik-hunains-projects"}
              >
                <IoLogoVercel />
              </Link>
              <Link target="_blank" href={"https://www.npmjs.com/~malikhunain"}>
                <IoLogoNpm />
              </Link>
            </div>

            <Link href="/CV/myCV.pdf" className="btn" target="_blank">
              Download CV
            </Link>
          </div>

          <div className="profession-container">
            <div className="profession-box">
              <div
                className="profession"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                <i className="bx bx-code-alt"><FaCode /></i>
                <h3>Web Develpor</h3>
              </div>
              <div
                className="profession"
                style={{ "--i": 1 } as React.CSSProperties}
              >
                <i className="bx bx-palette"><FaPalette /></i>
                <h3>Web Designer</h3>
              </div>
              <div
                className="profession"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                <i className="bx bx-code-alt"><FaCode /></i>
                <h3>UI/UX Designer</h3>
              </div>
              <div
                className="profession"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <i className="bx bx-video-recording"><IoMdVideocam/></i>
                <h3>Videographer</h3>
              </div>

              <div className="circle"></div>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="home-img">
            <Image
              src="/image/image1.png"
              alt="Profile picture"
              width={300}
              height={300}
            />
          </div>
        </section>
      </RevealWrapper>
    </div>
  );
}
