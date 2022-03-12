import React from "react";

// import { Button } from './Button';
import { Link } from "./Link";
import "./navigator.css";

type menuItem = {
  text: string;
  link: string;
};

interface NavigatorProps {
  menuItems?: [menuItem];
  // user?: User;
  // onLogin: () => void;
  // onLogout: () => void;
  // onCreateAccount: () => void;
}

export const Navigator = ({ menuItems }: NavigatorProps) => (
  <header>
    <div className="navigator">
      <ul className="menu">
        {menuItems?.map((item) => (
          <li key={item.text}>
            <Link label={item.text} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  </header>
);
