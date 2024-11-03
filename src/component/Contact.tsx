"use client";

import { RevealWrapper } from "next-reveal";
import React from "react";

export default function Contact() {
  return (
    <div>
      <RevealWrapper
        origin="right"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        <section className="contact" id="contact">
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>

          <form
            target="_blank"
            action="https://formspree.io/f/xkgwdyrq"
            method="POST"
          >
            <div className="input-box">
              <input type="text" name="fullname" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="mobilenumber"
                placeholder="Mobile Number"
              />
              <input
                type="text"
                name="emailsubject"
                placeholder="Email Subject"
              />
            </div>
            <textarea cols={30} rows={10} placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </form>
        </section>
      </RevealWrapper>
    </div>
  );
}
