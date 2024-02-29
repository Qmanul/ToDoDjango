import React, {Component} from "react";
import { groupByCompletion } from "../utils/utils";
import { ListGroup, Form, Button, Stack } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons"


export default function TaskList({ tasks, onTaskCompletionUpdate, onTaskDelete }) {


  return (
    <Stack direction="horizontal" gap={3} className="align-items-baseline">
    {groupByCompletion(tasks).map((tasks, index) => (
      <ListGroup key={index} className="w-50">
        {tasks.map(task => (
          <ListGroup.Item key={task.id}>
            <Stack direction="horizontal" gap={3}>
              <Form.Label className="me-auto text-break mb-0">
                {task.content}
              </Form.Label>
              <Form.Check type="checkbox" checked={task.completed} onChange={e => onTaskCompletionUpdate(e, task.id)}/>
              <Button variant="link" size="auto" onClick={e => onTaskDelete(e, task.id)}><TrashFill/></Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
      ))}
  </Stack>
  )
}