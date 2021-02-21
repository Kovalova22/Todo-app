import React from 'react';
import './App.css';
import TodoInput from './components/input';
import { connect } from 'react-redux';
import ListTodos from './components/listTodos';

function App() {
  return (
    <div className="App">
      <header>
        <TodoInput />
      </header>
      <ListTodos />
    </div>
  );
}

export default connect()(App);
