import React, { useRef, useState } from "react";
import {Form, Col, Button, Row} from "react-bootstrap"


export default function AddTask({ onTaskCreateSubmit }) {
  const inputContentRef = useRef()
  const onTaskCreateSubmitMiddleware = (e) => {
    const res = onTaskCreateSubmit(e, inputContentRef.current.value)
    inputContentRef.current.value = ''
    return res
  }

  return (
    <Form>
      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col xs='auto'>
          <Form.Control ref={inputContentRef} name="content" type="text" placeholder="Input your task"/>
        </Col>
        <Col xs='auto'>
          <Button type="submit" variant="primary" onClick={onTaskCreateSubmitMiddleware}>Add</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
        