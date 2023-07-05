import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
