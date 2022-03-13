import React from "react";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";
import { Dialog } from "components/Dialog";
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
        <Dialog isOpen={true} />
      </div>
    </div>
  );
}

export default App;
