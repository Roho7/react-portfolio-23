import React from "react";
import Beebo from "../assets/beebo-cover.png";

function Card() {
  return (
    <div className="group">
      <div className="relative h-96 w-160 card-upper rounded-3xl overflow-hidden ">
        <div className="absolute w-full h-full z-10 bg-gradient-to-tr from-ash-900 rounded-3xl"></div>
        <img
          src={Beebo}
          alt=""
          className="absolute h-full w-full object-cover rounded-3xl group-hover:scale-105 transition-all duration-500 ease"
        />
        <div className="m-4 absolute bottom-0 z-20 group-hover:mx-8 transition-all ease-[cubic-bezier(.57,.21,.69,1.25)]">
          <h1 className="font-normal">Beebo</h1>
          <h2>Character Animation</h2>
        </div>
        {/* <div className="card-bg-green"></div> */}
      </div>
    </div>
  );
}

export default Card;
