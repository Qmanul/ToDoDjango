import React, { Component, StrictMode }from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import { Container } from "react-bootstrap";


export default class App extends Component{
  constructor(props){
  super(props)
  this.router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
    },
  ]);
}

render(){
  return(
    <Container className="p-5">
      <StrictMode>
        <RouterProvider router={this.router} />
      </StrictMode>
    </Container>
    )
  }
}