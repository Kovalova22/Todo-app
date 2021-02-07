import React, { Component } from 'react';
import Todo from './todo';
import { fetchTodos, deleteTodo } from '../redux/actions';
import '../App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos: state.reducer.todos
});

class ListTodos extends Component{
    componentDidMount() {
        this.props.fetchTodos();
    }
    onDelete = todoId => {
        this.props.deleteTodo(todoId);
    }
    render() {
        return (
            <div className='list-todos'>
                {this.props.todos.map((todo) => (
                    <div className='todo' key={todo.id}>
                         <Todo key={todo.id} todo={todo} />
                         <button type= 'button'
                         onClick={() => this.onDelete(todo.id)}>Delete</button>
                        <input type='checkbox'/>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(ListTodos);