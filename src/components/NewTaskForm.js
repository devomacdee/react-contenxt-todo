import React, { useState } from 'react';
import { useTasks } from '../providers/TaskProvider';

export default function NewTaskForm() {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const submit = event => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        required
        value={task}
        placeholder="Get some eggs..."
        onChange={event => setTask(event.target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
};