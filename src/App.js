import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed == true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setFilterTodos(todos)
        break
    }
  }
  //useEffect
  useEffect(() => {
    filterHandler()
    console.log("hi");
  }, [todos, status])


  return (
    <div className="App">
      <header>
        <h1>chaim baror</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        filterTodos={filterTodos}
        todos={todos} />
    </div>
  );
}

export default App;
