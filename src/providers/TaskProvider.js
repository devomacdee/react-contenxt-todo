import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addTask = (task) =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        task,
        complete: false,
      },
    ]);

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const setTaskStatus = (id, status) =>
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              complete: status,
            }
          : task
      )
    );

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
}
