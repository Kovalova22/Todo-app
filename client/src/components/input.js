import React, { Component } from 'react';
import '../App.css';
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux';

class TodoInput extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;

        const todo = {title: title};
        this.props.addTodo(todo);
        this.getTitle.value = '';
    }

    render() {
        return (
            <form className = 'todo-form' onSubmit={this.handleSubmit}>
                <input placeholder='Add Todo' ref={(input) => this.getTitle=input}/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}
export default connect(null, {addTodo})(TodoInput);