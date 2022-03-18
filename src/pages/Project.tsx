import { Header } from "components/Header";
import { Navigator } from "components/Navigator";
import { Card } from "components/Card";
import { Stack } from "components/Stack";
import { StatusButton } from "components/StatusButton";
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
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date
      .toLocaleString([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .toString();
  };

  return (
    <div>
      <Header user={{ name: "User" }} onLogout={() => {}} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
        <div className="project">
          <h3 className="header">Issues</h3>
          {issues.map((issue) => (
            <Card>
              <Stack direction="row" justifyContent="space-between">
                <h3>{issue.title}</h3>
                <small>Created: {formatDate(issue.createdAt)}</small>
              </Stack>
              <p>{issue.content}</p>
              <p>
                <StatusButton issueId={issue.id} status={issue.status} />
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
