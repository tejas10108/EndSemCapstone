import React, { useState } from "react";
import "./ToDolist.css";

function ToDolist() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input.trim(),
      done: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Simple To-Do List</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.length === 0 ? (
          <li>No tasks yet</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  textDecoration: task.done ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ToDolist;
