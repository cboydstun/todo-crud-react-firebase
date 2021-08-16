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
    <div className="justify-content-center">
    <Form onSubmit={createTodo} className="mb-3">
      <Row>
        <Col lg={6}>
          <FormControl
            type="text"
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={title}
          />
        </Col>
        <Col lg={3}>
          <Button type="submit" variant="danger">Create Todo</Button>
        </Col>
      </Row>
    </Form>
    </div>
  );
}
