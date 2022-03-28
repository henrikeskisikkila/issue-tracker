import { useState } from "react";
import { MainHeader } from "pages/MainHeader";
import { Navigator } from "components/Navigator";
import { menu } from "config";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Table } from "components/Table";
import { Project } from "types";
import { AddProject } from "pages/AddProject";
import { projects } from "data/projects";
import { formatDate } from "services/format";
import "./projects.css";

export const Projects = () => {
  const [addProject, setAddProject] = useState(false);

  const saveProject = (project: Project) => {
    console.log("Save project", project);
    setAddProject(false);
  };

  const listProjects = () => {
    const data = projectData(projects);
    return (
      <div className="projects">
        <Stack justifyContent="space-between">
          <h3 className="header">Projects</h3>
          <Button
            primary={true}
            size={"small"}
            label={"Add project"}
            onClick={() => setAddProject(true)}
          />
        </Stack>
        <Table headers={["Project Name", "Create Date", "Owner"]} rows={data} />
      </div>
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
      <MainHeader />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
        {addProject ? <AddProject onSave={saveProject} /> : listProjects()}
      </div>
    </div>
  );
};
