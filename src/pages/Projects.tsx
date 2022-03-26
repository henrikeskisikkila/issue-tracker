import { useState } from "react";
import { Header } from "components/Header";
import { Navigator } from "components/Navigator";
import { menu } from "config";
import { Table } from "components/Table";
import { Project } from "types";
import { projects } from "data/projects";
import { formatDate } from "services/format";

export const Projects = () => {
  const [newProject, setNewProject] = useState(true);

  const showNewProject = () => {
    return <>Add a new project</>;
  };

  const listProjects = () => {
    const data = projectData(projects);
    return (
      <Table headers={["Project Name", "Create Date", "Owner"]} rows={data} />
    );
  };

  const projectData = (projects: Project[]) => {
    const data = projects.map((project) => {
      return [project.name, formatDate(project.createdAt), project.createdBy];
    });
    return data;
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
