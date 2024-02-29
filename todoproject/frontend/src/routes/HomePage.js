import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import { getToDoList, createToDo, switchToDoCompletion, deleteToDo } from "../api/todo"
import TaskListPlaceholder from "../components/TaskListPlaceholder.js";


export default function HomePage() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    getToDoList().then(
      response => {
        setTasks(response.data)
        setLoading(false)
      }
    )
  }, [])

  const handleTaskCopletionUpdate = async (e, id) => {
    e.preventDefault();

    await switchToDoCompletion(id).then(
      response => {
        const newTasks = tasks.map(task => {
          if (task.id === id){
            return response.data
          }
            return task
          })
          setTasks(newTasks)
        }
      )
    }

  const handleTaskCreate = async (e, inputRef) => {
    e.preventDefault()
    const content = new FormData(e.target).get('content')
    inputRef.value = ''

    await createToDo(content).then(
      response => setTasks([...tasks, response.data])
    ).catch((error) =>{
      console.log(error)
    })
  }

  const handleTaskDelete = async (e, id) => {
    e.preventDefault()

    await deleteToDo(id).then(
      response => setTasks(tasks.filter(task => task.id !== id))
    )
  }

  return(
    <>
      <AddTask onTaskCreateSubmit={handleTaskCreate}/>
      {loading ? (
        <>
          <TaskListPlaceholder />
        </>
      ) : (
        <>
          <TaskList
            tasks={tasks}
            onTaskCompletionUpdate={handleTaskCopletionUpdate}
            onTaskDelete={handleTaskDelete}
          />
        </>
      )}
    </>
  )
}