import { useState } from "react";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Textarea } from "components/Textarea";
import { Issue } from "types";
import "./addissue.css";

interface AddIssueProps {
  onSave: (issue: Issue) => void;
}

export const AddIssue = ({ onSave }: AddIssueProps) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  const handleIssue = () => {
    onSave({ header: header, content: content });
  };

  return (
    <div className="add-issue">
      <Stack direction={"column"} spacing={4}>
        <h3>Add Issue</h3>
        <Input
          type="text"
          placeholder="Header"
          onChange={(event) => {
            setHeader(event.target.value);
          }}
        />
        <Textarea
          placeholder="Content"
          rows={10}
          cols={50}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button
          primary={true}
          size={"small"}
          label={"Save"}
          onClick={handleIssue}
        />
      </Stack>
    </div>
  );
};
