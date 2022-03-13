import React from "react";
import "./dialog.css";
import { Button } from "components/Button";
interface DialogProps {
  isOpen: boolean;
}

export const Dialog = ({ isOpen }: DialogProps) => {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    console.log("dialog", open);
  }, [open]);

  return (
    <div className={`dialog ${open ? "" : "hidden"}`}>
      <Button size="small" onClick={() => setOpen(false)} label="Close" />
    </div>
  );
};
