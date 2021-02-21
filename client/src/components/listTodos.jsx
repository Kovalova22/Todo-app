import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { fetchTodos, deleteTodo } from '../redux/actions';
import '../App.css';

const mapStateToProps = (state) => ({
  todos: state.reducer.todos,
});

class ListTodos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  onDelete = (todoId) => {
    this.props.deleteTodo(todoId);
  };

  render() {
    return (
      <div className="App">
        {this.props.todos.map((todo) => (
          <ListGroup className="todo" key={todo.id}>
            <ListGroupItem className="column">{todo.title}</ListGroupItem>
            <ListGroupItem className="column">
              <button type="button" onClick={() => this.onDelete(todo.id)}>
                Delete
              </button>
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(ListTodos);
