import React from "react";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

function Topbar() {
  return (
    <div className="p-4 w-screen flex text-white justify-center">
      <div className="flex gap-8">
        <FaGithub /> <FaTwitterSquare /> <FaLinkedin />
      </div>
    </div>
  );
}

export default Topbar;
