import React from "react";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import Card from "../components/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function Project() {
  const scrollRef = useHorizontalScroll();
  const cards = document.querySelector(".cards");

  return (
    <section className="mt-40 mb-40">
      <div className="flex flex-col w-full items-center gap-10 h-full">
        <div className="relative">
          <h1>Projects</h1>
          <div className="absolute h-0.5 w-full bg-grass-500"></div>
        </div>
        {/* <AiOutlineArrowRight className="text-white" /> */}
        <div
          className="cards w-full overflow-x-scroll flex gap-20"
          ref={scrollRef}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Project;
