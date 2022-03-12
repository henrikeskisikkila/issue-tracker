import React from "react";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";
import "./App.css";

const menu = [
  {
    text: "menu item 1",
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
      <Navigator menuItems={menu} />
    </div>
  );
}

export default App;
