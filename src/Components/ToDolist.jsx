import React, { useState } from "react";
import "./ToDolist.css";

function ToDolist() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h3>To-Do List</h3>
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task, idx) => (
          <li key={idx} className={task.done ? "done" : ""}>
            <span onClick={() => toggleTask(idx)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(idx)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDolist;