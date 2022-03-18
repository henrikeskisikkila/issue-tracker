import { useState } from "react";
import { Button } from "components/Button";

interface StatusButtonProps {
  issueId: string;
  status: string;
}

export const StatusButton = ({ issueId, status }: StatusButtonProps) => {
  const [state, setState] = useState(status);

  const handleStatusButton = (event: any) => {
    console.log("click", event.target.id);
    state === "open" ? setState("close") : setState("open");
  };

  return (
    <Button
      primary={true}
      label={state === "open" ? "Open" : "Closed"}
      backgroundColor={state === "open" ? "#1efd73" : undefined}
      id={issueId}
      onClick={handleStatusButton}
    />
  );
};
