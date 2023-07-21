import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage(props) {
  const project = props.data;

  const { id } = useParams();

  console.log(id);
  console.log(project.filter((project) => project.id === id));

  return (
    <div>
      {project
        .sort((a, b) => a.Index - b.Index)
        .filter((project) => project.id === id)
        .map((project) => {
          return (
            <div key={project.id} className="relative flex flex-col">
              <div className="m-8">
                <h1 className="">{project.Name}</h1>
                <h1 className="text-4xl mb-4 text-ash-100">{project.Type}</h1>
                <h2 className="font-bold text-xl">Context</h2>
                <h2 className="mb-4 w-1/2">{project.Description}</h2>
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
              </div>
              <div className="">
                <img src={project.Image} className="object-cover" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProjectPage;
