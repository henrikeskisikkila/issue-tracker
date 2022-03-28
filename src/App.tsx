import React from "react";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "pages/MainHeader";
import { Navigator } from "./components/Navigator";
import { menu } from "config";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("Logout user");
    navigate("/login");
  };

  return (
    <div>
      <MainHeader />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
      </div>
    </div>
  );
}

export default App;
