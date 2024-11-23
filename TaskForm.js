import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions"; // Action to add a task

const TaskForm = () => {
  const [task, setTask] = useState(""); // Local state for the input field
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the addTask action
      setTask(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary ml-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
