import { Button } from "components/Button";
import { Project } from "types";

interface AddProjectProps {
  onSave: (project: Project) => void;
}

export const AddProject = ({ onSave }: AddProjectProps) => {
  const handleSaveButton = () => {
    onSave({
      id: "id",
      name: "Project Name",
      createdBy: "2022-01-03T09:03:03.905+00:00",
      createdAt: "61d3fa9d4d199ae5f9b53cb9",
    });
  };
  return (
    <Button
      primary={true}
      size={"small"}
      label={"Save"}
      onClick={handleSaveButton}
    />
  );
};
