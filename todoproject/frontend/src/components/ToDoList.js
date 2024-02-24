import React, {Component, componentDidMount} from "react";
import { getToDoList, switchToDoCompletion } from "../api/todo";


export default class ToDoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos:[]
    }
}

  componentDidMount() {
    getToDoList().then(
      response => {
        this.setState({
          todos: response.data
        })
      }
    )
  }

  handleCompletionChange = (e) => {
    e.preventDefault();

    const { id } = e.target;
    switchToDoCompletion(id).then(
      response => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
            if (todo.id == id){
              return response.data
            }
              return todo 
            })
        }))
      }
    )
  }

  render(){
    return(
      <>
        {this.state.todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.content}</p>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={this.handleCompletionChange}
            />
          </div>
        ))}
      </>
    )
  }
}