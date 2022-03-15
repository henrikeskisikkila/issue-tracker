import React from "react";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";
import "./App.css";

const menu = [
  {
    text: "Issues",
    link: "#",
  },
  {
    text: "Issues",
    link: "#",
  },
];

function App() {
  return (
    <div>
      <Header
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menuItems={menu} />
      </div>
    </div>
  );
}

export default App;
