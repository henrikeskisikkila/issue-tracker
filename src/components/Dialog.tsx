import React, { FC } from "react";
import "./dialog.css";
import { Button } from "components/Button";

interface DialogProps {
  isOpen?: boolean;
  showDismiss?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen = false,
  showDismiss = false,
  children,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    console.log("dialog", open);
  }, [open]);

  return (
    <div className={`dialog ${open ? "" : "hidden"}`}>
      {showDismiss ? (
        <Button size="small" onClick={() => setOpen(false)} label="Close" />
      ) : null}
      {children}
    </div>
  );
};
