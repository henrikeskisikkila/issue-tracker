import { Header } from "components/Header";
import { Navigator } from "components/Navigator";
import "./project.css";
import { issues } from "data/issues.js";

const menu = [
  {
    item: {
      label: "Projects",
    },
    subItems: [
      {
        label: "Project 1",
        link: "#",
      },
      {
        label: "Project 2",
        link: "#",
      },
    ],
  },
  {
    item: {
      label: "Settings",
      link: "#",
    },
    subItems: [],
  },
];

export const Project = () => {
  return (
    <div>
      <Header user={{ name: "User" }} onLogout={() => {}} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
        <div className="project">
          <h3>Issues</h3>
          {issues.map((issue) => (
            <>
              <h3>{issue.title}</h3>
              <p>{issue.content}</p>
              <p>{issue.status}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
