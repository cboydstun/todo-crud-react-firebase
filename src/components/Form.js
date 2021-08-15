import React, {useState} from 'react'
import firebase from '../util/firebase'

export default function Form() {
    const [taskName, setTaskName] = useState('')

    const createTodo = (e) => {
        e.preventDefault()
        const todoRef = firebase.database().ref('Todo')
        const todo = {
            taskName,
            completed: false
        }
        todoRef.push(todo);
    }

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    return (
        <form onSubmit={createTodo}>
            <input
                placeholder="What needs to be done?"
                value={taskName}
                type="text"
                onChange={handleChange}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}
