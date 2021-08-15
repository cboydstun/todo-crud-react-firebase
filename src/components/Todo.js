import React, { useState } from "react";
import firebase from "../util/firebase";

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
    <div>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />

      <div>
        <button onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button onClick={editTodo}>
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}