import { useState } from "react";
import { AddIssue } from "pages/AddIssue";
import { Header } from "components/Header";
import { Navigator } from "components/Navigator";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { Stack } from "components/Stack";
import { StatusButton } from "components/StatusButton";
import { Issue } from "types";
import { menu } from "config";
import "./project.css";
import { issues } from "data/issues.js";

export const Project = () => {
  const [newIssue, setNewIssue] = useState(false);

  const showNewIssue = () => {
    setNewIssue(true);
  };

  const onSave = (issue: Issue) => {
    console.log("Save a new issue", issue);
    setNewIssue(false);
  };

  const showAddIssue = () => {
    return <AddIssue onSave={onSave} />;
  };

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

  const showIssues = () => {
    return (
      <div className="project">
        <Stack justifyContent="space-between">
          <h3 className="header">Issues</h3>
          <Button
            primary={true}
            size={"small"}
            label={"New Issue"}
            onClick={showNewIssue}
          />
        </Stack>

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
    );
  };

  return (
    <div>
      <Header user={{ name: "User" }} onSearch={() => {}} onLogout={() => {}} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
        {newIssue ? showAddIssue() : showIssues()}
      </div>
    </div>
  );
};
