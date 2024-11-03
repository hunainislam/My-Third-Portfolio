"use client";

import React from "react";
import { RevealWrapper } from "next-reveal";

export default function ScrollReveal() {
  return (
    <div>
      <RevealWrapper
        origin="bottom"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <div className="home-img">
          <img src="/path-to-image.jpg" alt="Home Image" />
        </div>
        <div className="services-container projects-box contact form">
          {/* Services, Projects, Contact form */}
        </div>
      </RevealWrapper>

      <RevealWrapper
        origin="left"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <div className="home-content">
          <h1>About Us</h1>
          <img src="/path-to-about-image.jpg" alt="About Image" />
        </div>
      </RevealWrapper>

      <RevealWrapper
        origin="top"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <div className="home-content">
          <h3>Introduction</h3>
          <p>Welcome to our site. Here is a brief introduction...</p>
        </div>
        <div className="about-content">{/* Additional about content */}</div>
      </RevealWrapper>
    </div>
  );
}
