import React, { useState } from "react";
import firebase from "../util/firebase";

import {
  Button,
  Form,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";

export default function FormComponent() {
  const [title, setTitle] = useState("");

  const createTodo = (event) => {
    event.preventDefault();
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Form onSubmit={createTodo} className="mb-3">
      <Row>
        <Col lg={8}>
          <FormControl
            type="text"
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={title}
          />
        </Col>
        <Col lg={4}>
          <Button type="submit" variant="danger">Create Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}
