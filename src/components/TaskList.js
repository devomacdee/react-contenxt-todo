import React, { useEffect, useRef } from "react";
import { useTasks } from "../providers/TaskProvider";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTasks();
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <table>
      <tbody>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </tbody>
    </table>
  );
}
