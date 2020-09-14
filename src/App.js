import React from 'react';
import './App.css';
import './styles/Todo.scss';
import './styles/Main.scss';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container">
      <div className="title">Todo List</div>
      <NewTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
