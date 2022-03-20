import React from "react";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";
import { menu } from "config";
import "./App.css";

function App() {
  return (
    <div>
      <Header user={{ name: "User" }} onSearch={() => {}} onLogout={() => {}} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
      </div>
    </div>
  );
}

export default App;
