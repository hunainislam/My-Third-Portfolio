"use client";

import { RevealWrapper } from "next-reveal";
import React from "react";

export default function Services() {
  return (
    <div>
      <RevealWrapper
        origin="bottom"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <section className="services" id="services">
          <h2 className="heading">
            My <span>Services</span>
          </h2>
          <div className="services-container">
            <div className="services-box">
              <i className="bx bx-code-alt"></i>
              <h3>Web Development</h3>
              <p>
                I’m a web developer, crafting interactive websites using HTML,
                CSS, JavaScript, Next.js and various frameworks to create
                seamless, user-friendly experiences.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
            <div className="services-box">
              <i className="bx bx-bar-chart-alt"></i>
              <h3>Degital Marketing</h3>
              <p>
                I’m a digital marketer, helping brands grow online through
                targeted strategies, SEO, social media, and analytics to reach
                and engage audiences effectively
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
            <div className="services-box">
              <i className="bx bxs-paint"></i>
              <h3>Graphic Designer</h3>
              <p>
                I’m a graphic designer, creating visual concepts with
                creativity, color, typography, and design software to
                communicate ideas and captivate audiences
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  );
}
