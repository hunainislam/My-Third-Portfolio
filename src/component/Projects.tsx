"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <RevealWrapper
        origin="bottom"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <section className="projects" id="projects">
          <h2 className="heading">
            Latest <span>Projects</span>
          </h2>

          <div className="projects-container">
            <div className="projects-box">
              <Image
                src="/image/project1.png"
                alt="no picture"
                width={500}
                height={500}
              />

              <div className="projects-layer">
                <h4>Interactive Resume Builder</h4>
                <p>
                  An Interactive Resume Builder allows users to create, edit
                </p>
                <Link
                  target="_blank"
                  href={
                    "https://milestone-based-interactive-resume-builder.vercel.app/"
                  }
                >
                  <i className="bx bx-link-external">
                    <FaExternalLinkAlt />
                  </i>
                </Link>
              </div>
            </div>
            <div className="projects-box">
              <Image
                src="/image/project2.png"
                alt="no picture"
                width={500}
                height={500}
              />

              <div className="projects-layer">
                <h4>E-Commerce App</h4>
                <p>
                  You will find Link comprehensive E-Commerce app that
                  exemplifies my skills in UI/UX design and web development.
                </p>
                <Link
                  target="_blank"
                  href={"https://ecommerce-app-store-liart.vercel.app/"}
                >
                  <i className="bx bx-link-external">
                    <FaExternalLinkAlt />
                  </i>
                </Link>
              </div>
            </div>
            <div className="projects-box">
              <Image
                src="/image/project3.png"
                alt="no picture"
                width={500}
                height={500}
              />

              <div className="projects-layer">
                <h4>Portfolio</h4>
                <p>
                  Welcome to my portfolio! As Link passionate UI/UX designer and
                  web developer
                </p>
                <Link
                  target="_blank"
                  href={"https://my-second-portfolio-six.vercel.app/"}
                >
                  <i className="bx bx-link-external">
                    <FaExternalLinkAlt />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  );
}
