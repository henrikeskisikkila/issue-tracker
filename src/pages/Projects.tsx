import { useState } from "react";
import { Header } from "components/Header";
import { Navigator } from "components/Navigator";
import { menu } from "config";
import { projects } from "data/projects";

export const Projects = () => {
  const [newProject, setNewProject] = useState(true);

  const showNewProject = () => {
    return <>Add a new project</>;
  };

  const listProjects = () => {
    return <>List of projects</>;
  };

  return (
    <div>
      <Header user={{ name: "User" }} onSearch={() => {}} onLogout={() => {}} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
        {newProject ? listProjects() : showNewProject()}
      </div>
    </div>
  );
};
