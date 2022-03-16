import React from "react";

import { Button } from "./Button";
import "./header.css";
import Logo from "assets/logo.svg";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={Logo} alt="Log" />
        <h1>Issue Tracker</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : null}
      </div>
    </div>
  </header>
);
