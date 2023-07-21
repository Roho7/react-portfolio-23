import React from "react";
import { useState, useEffect } from "react";
import App from "./App.jsx";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.jsx";
import { db } from "./hooks/firebase";
import { getDocs, collection } from "@firebase/firestore";

function Home() {
  const projectData = collection(db, "Project");
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const getProjectData = async () => {
      try {
        const data = await getDocs(projectData);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjectList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getProjectData();
  }, []);

  return (
    <Routes>
      <Route path="/react-portfolio-23/" element={<App data={projectList} />} />
      <Route
        path="/react-portfolio-23/project/:id"
        element={<ProjectPage data={projectList} />}
      />
    </Routes>
  );
}

export default Home;
