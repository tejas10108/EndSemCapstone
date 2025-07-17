import React, { useState } from "react";
import { Plus, X, Check } from "lucide-react";
import "./ToDoList.css";

function ToDoList() {
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
      {/* Header */}
      <div className="todo-header">
        <h3 className="todo-title">Tasks</h3>
        <p className="todo-subtitle">
          {tasks.filter((task) => !task.done).length} remaining
        </p>
      </div>

      {/* Add Task Form */}
      <div className="todo-form-section">
        <form onSubmit={addTask} className="todo-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="todo-input"
            />
          </div>
          <button type="submit" className="add-button">
            <Plus size={18} />
            Add
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className="todo-list-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <Check size={24} />
            </div>
            <p className="empty-title">No tasks yet</p>
            <p className="empty-subtitle">
              Add your first task above to get started
            </p>
          </div>
        ) : (
          <ul className="todo-list">
            {tasks.map((task) => (
              <li key={task.id} className="todo-item">
                <div className="todo-item-content">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`todo-checkbox ${task.done ? "checked" : ""}`}
                  >
                    {task.done && <Check size={12} />}
                  </button>

                  {/* Task Text */}
                  <span
                    onClick={() => toggleTask(task.id)}
                    className={`todo-text ${task.done ? "completed" : ""}`}
                  >
                    {task.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete-button"
                  >
                    <X size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Stats */}
      {tasks.length > 0 && (
        <div className="todo-footer">
          <div className="todo-stats">
            <span className="stats-main">
              {tasks.filter((task) => task.done).length} of {tasks.length}{" "}
              completed
            </span>
            <div className="stats-details">
              <span className="stats-done">
                ✓ {tasks.filter((task) => task.done).length} Done
              </span>
              <span className="stats-pending">
                ○ {tasks.filter((task) => !task.done).length} Pending
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
