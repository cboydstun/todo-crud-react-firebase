import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { Container } from "react-bootstrap";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container >
        <Title />
        <div className="todos">
        <Form />
        <TodoList />
        </div>
      </Container>
    </div>
  );
}
