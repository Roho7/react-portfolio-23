import React from "react";
import { db } from "../hooks/firebase";

import { useParams } from "react-router-dom";

function ProjectPage(props) {
  const projectData = props.data;
  console.log("this is" + projectData);

  const { id } = useParams();

  return (
    <div>
      {projectData
        .filter((project) => project.id === id)
        .map((project) => {
          return (
            <div key={project.id}>
              <h1>{project.name}</h1>
              <h2>Context</h2>
              <h2>{project.software1}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default ProjectPage;
