import React from 'react'
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJava, DiMysql } from "react-icons/di";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">  {/* Customise className in Tailwind - index.css*/}
              < FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <DiMysql />
            </span>
            <span className="bannerIcon">
              <DiJava />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media