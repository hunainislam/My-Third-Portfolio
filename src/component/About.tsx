"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <RevealWrapper
        origin="left"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <section className="about" id="about">
          <div className="about-img">
            <Image
              src="/image/image2.png"
              alt="About image"
              width={300}
              height={300}
            />
          </div>
          <div className="about-content">
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <h3>Hi, I'm Here To Help Your Project!</h3>
            <p>
              I am a passionate web developer with a deep interest
              <br />
              in creating engaging, user-friendly, and efficient web
              <br />
              sites. My journey in web development began with learn
              <br />
              ing the fundamentals of HTML, CSS, and JavaScript,
              <br /> which laid a solid foundation for my skills. Over time, I
              <br />
              have mastered modern frameworks and technologies
              <br />
              such as Next.js, and Tailwind CSS to build dynamic and
              <br />
              responsive web applications.
            </p>
            <Link href="#" className="btn">
              Read More
            </Link>
          </div>
        </section>
      </RevealWrapper>
    </div>
  );
}
