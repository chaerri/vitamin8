import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../actions"; // Action to delete a task

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index)); // Dispatch deleteTask action
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {task}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
