import React from "react";
import Line from "../assets/Line.png";
import { Link } from "react-router-dom";

const experience = [
  {
    company: "Periskope",
    role: "Full-Stack Developer",
    year: "2024",
    link: "https://periskope.app/",
  },
  {
    company: "SimpliML",
    role: "Full-Stack Developer",
    year: "2023",
    link: "https://simpliml.com/",
  },
  {
    company: "Frenzopay",
    role: "UI/UX Designer",
    year: "2022 - 2023",
    link: "https://frenzopay.com/",
  },
];

const education = [
  {
    course: "M.Sc. Human-Computer Interaction",
    university: "University of Nottingham",
    year: "2023 - 2024",
  },
  {
    course: "CS50x: Introduction to Computer Science",
    university: "CS50, Harvard University",
    year: "2023",
  },
  {
    course: "B.Sc. Neuroscience",
    university: "Amity University Noida",
    year: "2020 - 2023",
  },
];

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
            <h1 className="about-text">22</h1>
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
            {experience.map((exp) => (
              <div key={exp.company} className="mb-4">
                <Link to={exp.link}>
                  <h1 className="about-text" role="button">
                    {exp.company}
                  </h1>
                </Link>
                <h2>{exp.role}</h2>
                <span className="text-ash-100">{exp.year}</span>
              </div>
            ))}
          </div>
          <div className="about-cards p-8 lg:col-span-3">
            <h1 className="text-2xl font-normal">Education</h1>
            {education.map((edu) => (
              <div key={edu.course} className="mb-4">
                <h1 className="about-text">{edu.course}</h1>
                <h2>{edu.university}</h2>
                <span className="text-ash-100">{edu.year}</span>
              </div>
            ))}
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
