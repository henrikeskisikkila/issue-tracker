import React from "react";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";
import "./App.css";

const menu = [
  {
    item: {
      label: "Projects",
    },
    subItems: [
      {
        label: "Project 1",
        link: "#",
      },
      {
        label: "Project 2",
        link: "#",
      },
    ],
  },
  {
    item: {
      label: "Settings",
      link: "#",
    },
    subItems: [],
  },
];

function App() {
  return (
    <div>
      <Header
        user={{ name: "User" }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigator menu={menu} />
      </div>
    </div>
  );
}

export default App;
