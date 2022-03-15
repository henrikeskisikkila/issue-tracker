import React, { useState } from "react";
import { Dialog } from "components/Dialog";
import { Stack } from "components/Stack";
import Logo from "assets/logo.svg";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Link } from "components/Link";

interface LoginDialogProps {
  open: boolean;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({ open }) => {
  const login = () => {
    console.log("login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  return (
    <Dialog isOpen={open}>
      <Stack direction="column">
        <div>
          <img src={Logo} alt="Log" />
          <h1>Issue Tracker</h1>
        </div>
        <p>Login</p>
        <Input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button size="small" primary={true} onClick={login} label="Login" />
        <Link primary={true} label={"Create an account"} link={"/signup"} />
      </Stack>
    </Dialog>
  );
};
