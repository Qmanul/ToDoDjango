import React, { useRef } from "react";
import {Form, Col, Button, Row} from "react-bootstrap"


export default function AddTask({ onTaskCreateSubmit }) {
  let inputContentRef = useRef()

  return (
    <Form onSubmit={event => onTaskCreateSubmit(event, inputContentRef)}>
      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col sm={3}>
          <Form.Control ref={ref => inputContentRef = ref} name="content" type="text" placeholder="Input your task"/>
        </Col>
        <Col sm={3}>
          <Button type="submit" variant="primary">Add</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
        