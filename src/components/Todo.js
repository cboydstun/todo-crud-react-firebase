import React, { useState } from "react";
import firebase from "../util/firebase";

import { Row, Col, Form, Button } from "react-bootstrap";

export default function Todo({ todo }) {
  const [newTitle, setNewTitle] = useState("");

  //remove todo
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  //toggle complete
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  //update todo title
  const editTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      title: newTitle,
    });
  };

  //handle changes
  const handleChange = (e) => {
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <Form>
      <Row>
        <Col lg={6}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={todo.title === "" ? newTitle : todo.title}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Button
            type="submit"
            onClick={editTodo}
            style={
              todo.complete ? { visibility: "hidden" } : { color: "white" }
            }
            className="crud-button"
          >
            <i className="fa fa-edit"></i>
          </Button>

          <Button
            onClick={completeTodo}
            style={todo.complete ? { color: "black" } : { color: "red" }}
            className="crud-button"
          >
            <i className="fa fa-check-circle"></i>
          </Button>

          <Button onClick={deleteTodo} className="crud-button">
            <i className="fa fa-trash-o"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
