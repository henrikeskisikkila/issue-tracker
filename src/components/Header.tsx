import { Input } from "components/Input";
import { Button } from "./Button";
import "./header.css";
import Logo from "assets/logo.svg";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogout: () => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ user, onLogout, onSearch }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={Logo} alt="Log" />
        <h1>Issue Tracker</h1>
      </div>
      <div>
        <Input type={"text"} placeholder={"Search"} onChange={onSearch} />
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
