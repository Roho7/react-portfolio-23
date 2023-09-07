import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

function ProjectPage(props) {
  const project = props.data;

  const { id } = useParams();

  console.log(id);
  console.log(project.filter((project) => project.id === id));

  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="m-8 mb-0" onClick={handleBackButton}>
        <FaAngleLeft /> Back
      </button>
      {project
        .sort((a, b) => a.Index - b.Index)
        .filter((project) => project.id === id)
        .map((project) => {
          return (
            <div key={project.id} className="relative flex flex-col">
              <div className="m-8 mt-2">
                <h1 className="">{project.Name}</h1>
                <h1 className="text-4xl mb-4 text-ash-100">{project.Type}</h1>
                <h2 className="font-bold text-xl">Context</h2>
                <h2 className="mb-4 md:w-1/2">{project.Description}</h2>
                <div className="flex gap-4">
                  <span className=" text-white text-sm p-2 border border-white rounded-full">
                    {project.Software1}
                  </span>
                  <span
                    className={
                      project.Software2
                        ? " text-white text-sm p-2 border border-white rounded-full"
                        : "hidden"
                    }
                  >
                    {project.Software2}
                  </span>
                </div>
                <Link
                  to={project.Link}
                  className={
                    project.Link
                      ? "text-ash-500 hover:text-grass-500"
                      : "hidden"
                  }
                >
                  <p className="mt-4">View Project</p>
                </Link>
              </div>
              <div className="">
                <img src={project.Image} className="object-cover" />
              </div>
              {project.Video && (
                <div className="h-72 md:h-screen">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.Video}`}
                    className={project.Video ? "w-full h-full" : "hidden"}
                  ></iframe>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default ProjectPage;
