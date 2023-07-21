import React from "react";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

function Topbar() {
  return (
    <div className="p-4 w-screen flex text-white justify-center">
      <div className="flex gap-8">
        <FaGithub
          onClick={() => (window.location = "https://github.com/Roho7")}
          className="cursor-pointer"
        />
        <FaTwitterSquare
          onClick={() => (window.location = "https://twitter.com/Rohosen_")}
          className="cursor-pointer"
        />
        <FaLinkedin
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/rohosen-bhattacharya-9311611aa/")
          }
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Topbar;
