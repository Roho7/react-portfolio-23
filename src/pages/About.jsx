import React from "react";
import Line from "../assets/Line.png";

function About() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="mx-8 lg:mx-32 flex flex-col gap-16 items-center">
        <div className="relative">
          <h1>About</h1>
          <div className="absolute h-0.5 w-full bg-grass-500"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <div className="about-cards p-8">
            <h1 className="text-2xl font-normal">Age</h1>
            <h1 className="about-text">21</h1>
          </div>
          <div className="about-cards p-8">
            <h1 className="text-2xl font-normal">Nationality</h1>
            <h1 className="about-text">Indian</h1>
          </div>
          <div className="about-cards p-8">
            <h1 className="text-2xl font-normal">Location</h1>
            <h1 className="about-text">UK</h1>
          </div>
          <div className="about-cards p-8 lg:col-span-2 lg:row-span-2">
            <h1 className="text-2xl font-normal">Experience</h1>
            <h1 className="about-text mb-2">Frenzopay</h1>
            <h2>UI/UX Designer</h2>
            <span className="text-ash-100">2022 - 2023</span>

            <h1 className="about-text mb-2">Marcadors</h1>
            <h2>Motion Graphics Designer</h2>
            <span className="text-ash-100">2022 - 2023</span>
          </div>
          <div className="about-cards p-8 lg:col-span-3">
            <h1 className="text-2xl font-normal">Education</h1>
            <h1 className="about-text">M.Sc. Human-Computer Interaction</h1>
            <h2>Univeristy of Nottingham</h2>
            <span className="text-ash-100">2023</span>
            <h1 className="about-text">B.Sc. Neuroscience</h1>
            <h2>Amity University Noida</h2>
            <span className="text-ash-100">2020 - 2023</span>
          </div>
        </div>
      </div>

      <div className="sine-container md:scale-150 absolute top-1/2 -z-30 flex">
        <img src={Line} alt="" className="sine-wave" />
        <img src={Line} alt="" className="sine-wave" />
      </div>
    </div>
  );
}

export default About;
