import { useState } from "react";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Project } from "types";

interface AddProjectProps {
  onSave: (project: Project) => void;
}

export const AddProject = ({ onSave }: AddProjectProps) => {
  const [projectName, setProjectName] = useState("");
  const handleSaveButton = () => {
    onSave({
      id: undefined,
      name: projectName,
      createdBy: new Date().toISOString(),
      createdAt: "1",
    });
  };

  return (
    <div className="add-issue">
      <Stack direction={"column"} spacing={4}>
        <h3>Add Project</h3>
        <Input
          type="text"
          placeholder="Project Name"
          onChange={(event) => {
            setProjectName(event.target.value);
          }}
        />
        <Button
          primary={true}
          size={"small"}
          label={"Save"}
          onClick={handleSaveButton}
        />
      </Stack>
    </div>
  );
};
