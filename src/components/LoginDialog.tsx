import React, { FC } from "react";
import { Dialog } from "components/Dialog";
import { Stack } from "components/Stack";
import Logo from "assets/logo.svg";
import { Button } from "components/Button";

interface LoginDialogProps {
  open: boolean;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({ open }) => {
  const login = () => {
    console.log("login");
  };
  return (
    <Dialog isOpen={open}>
      <Stack direction="column">
        <div>
          <img src={Logo} alt="Log" />
          <h1>Issue Tracker</h1>
        </div>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input type="email" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <Button size="small" primary={true} onClick={login} label="Login" />
      </Stack>
    </Dialog>
  );
};

// export const LoginDialog = ({ open, children }: LoginDialogProps) => {
//   return <Dialog isOpen={open}>{children}</Dialog>;
// };
