import React, {useState} from 'react'
import firebase from '../util/firebase'

export default function Form() {
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
        setTitle(e.target.value)
    }

    return (
        <form onSubmit={createTodo}>
            <input
                placeholder="What needs to be done?"
                value={title}
                type="text"
                onChange={handleChange}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}
