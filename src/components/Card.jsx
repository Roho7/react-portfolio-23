import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    console.log(link);
    navigate(`/project/${link}`);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => handleCardClick(props.id)}
    >
      <div className="relative h-40 md:h-96 w-80 md:w-160 card-upper rounded-3xl overflow-hidden ">
        <div className="absolute w-full h-full z-10 bg-gradient-to-tr from-ash-900 rounded-3xl"></div>
        <img
          src={props.cover}
          alt=""
          className="absolute h-full w-full object-cover rounded-3xl group-hover:scale-105 transition-all duration-500 ease"
        />
        <div className="m-4 md:m-10 absolute bottom-0 z-20 group-hover:mx-16 transition-all ease-[cubic-bezier(.57,.21,.69,1.25)]">
          <h1 className="font-normal text-3xl md:text-4xl lg:text-8xl">
            {props.name}
          </h1>
          <h2 className="md:mb-2 font-display md:text-3xl">{props.type}</h2>
          <span className=" text-white text-xs md:text-sm py-1 px-2 md:p-2 border border-white rounded-full">
            {props.software1}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
