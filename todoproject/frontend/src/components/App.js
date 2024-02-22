import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";
import { getToDoDetail } from "../api/todo";

const postToDoItems = async () => {
  const res = await getToDoDetail(1);
  console.log(res);
};


export default class App extends Component {
  constructor(props) {
    super(props);
    postToDoItems();
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