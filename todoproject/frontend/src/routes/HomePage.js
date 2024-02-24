import React, {Component, componentDidMount} from "react";
import ToDoList from "../components/ToDoList";

export default class HomePage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <ToDoList />
      </>
    )
  }
}