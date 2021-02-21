import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class TodoInput extends Component {
  refreshPage() {
    window.location.reload(false);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;

    const todo = { title };
    this.props.addTodo(todo);
    this.getTitle.value = '';
    this.refreshPage();
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input placeholder="Add Todo" ref={(input) => (this.getTitle = input)} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default connect(null, { addTodo })(TodoInput);
