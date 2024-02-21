import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";
import { getToDoItems } from ".api/todo";

const loadToDoItems = async () => {
  const res = await getToDoItems();
  console.log(res)
};

export default class App extends Component {
  constructor(props) {
    super(props);
    loadToDoItems();
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />)