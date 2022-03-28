import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
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
      <Header user={{ name: "User" }} onSearch={() => {}} onLogout={onLogout} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
      </div>
    </div>
  );
}

export default App;
