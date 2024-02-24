import React, { Component, StrictMode }from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/HomePage'


class App extends Component{
    constructor(props){
    super(props)
    this.router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage />,
      },
    ]);
  }

  render(){
    return(
    <StrictMode>
      <RouterProvider router={this.router} />
    </StrictMode>
    )
  }
}

ReactDOM.createRoot(document.getElementById("container")).render(<App />);