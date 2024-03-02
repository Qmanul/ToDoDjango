import React, { useState, useEffect, lazy, Suspense } from "react";
import { getToDoList, createToDo, switchToDoCompletion, deleteToDo } from "../api/todo"
import { Alert, Spinner } from "react-bootstrap";

const TaskListPlaceholder = lazy(() => import("../components/TaskListPlaceholder.js")) ;
const AddTask = lazy(() => import("../components/AddTask")) ;
const TaskList = lazy(() => import("../components/TaskList")) ;

export default function HomePage() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showError, setShowError] = useState('')

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
    e.target.disabled = true
    await switchToDoCompletion(id).then(response => setTasks(tasks.map(task => task.id === id ? response.data : task)))
    e.target.disabled = false
  }

  const handleTaskCreate = async (e, value) => {
    e.preventDefault()
    e.target.disabled = true
    await createToDo(value).then(response => setTasks([...tasks, response.data])).catch((error) => setShowError(error.message))
    e.target.disabled = false
  }

  const handleTaskDelete = async (e, id) => {
    e.preventDefault()
    e.target.disabled = true
    await deleteToDo(id).then(response => setTasks(tasks.filter(task => task.id !== id)))
  }

  return(
    <>
      <Alert show={!!showError} variant="danger" onClose={() => setShowError('')} dismissible>
        <p>{showError}</p>
      </Alert>
      <Suspense fallback={<Spinner animation="border" role="status" />}>
        <AddTask onTaskCreateSubmit={handleTaskCreate}/>
        {loading ? (
          <TaskListPlaceholder />
        ) : (
          <TaskList
            tasks={tasks}
            onTaskCompletionUpdate={handleTaskCopletionUpdate}
            onTaskDelete={handleTaskDelete}
          />
        )}
      </Suspense>
    </>
  )
}