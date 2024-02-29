import React, {Component} from "react";
import { ListGroup, Form, Button, Stack, Placeholder } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

export default class TaskListPlaceholder extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Stack direction="horizontal" gap={3} className="align-items-baseline">
        {[...Array(2)].map((_, index) => (
          <ListGroup key={index} className="w-50">
            {[...Array(5)].map((_, i) => (
              <ListGroup.Item key={i}>
                <Stack direction="horizontal" gap={3}>
                  <Placeholder as={Form.Control} type='checkbox' />
                  <Placeholder.Button variant="link" size="auto"><TrashFill/></Placeholder.Button>
                </Stack>
              </ListGroup.Item>
            ))}
          </ListGroup>
          ))}
      </Stack>
    )
  }
}