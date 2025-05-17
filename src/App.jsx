"use client"

import { useState, useRef } from "react"
import "./App.css"
// Replace the Trash2 icon import with a simple trash icon using HTML entities

function App() {
  const [todos, setTodos] = useState([
    "I will wake up at 8 in the morning",
    "I will practice html for 1 hour",
    "I will give time for 2 hours css",
    "Then I will have breakfast",
  ])

  const inputRef = useRef(null)

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim()
    if (text) {
      setTodos([...todos, text])
      inputRef.current.value = ""
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="input-container">
          <input ref={inputRef} type="text" placeholder="I hours" onKeyPress={handleKeyPress} />
          <button className="add-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <div className="todos-container">
          {todos.map((todo, index) => (
            <div className="todo-item" key={index}>
              <span>{todo}</span>
              <button className="delete-button" onClick={() => handleDeleteTodo(index)} aria-label="Delete todo">
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
