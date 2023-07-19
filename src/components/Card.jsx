import React from "react";
import Beebo from "../assets/beebo-cover.png";

function Card() {
  return (
    <div className="w-1/2 group">
      <div className="relative h-80 w-full card-upper rounded-lg overflow-hidden group-hover:scale-105 transition-all ease-[cubic-bezier(.57,.21,.69,1.25)]">
        <div className="absolute w-full h-full z-10 m-0.5 bg-gradient-to-tr from-ash-900 rounded-md"></div>
        <img src={Beebo} alt="" className="absolute p-0.5 rounded-md" />
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
