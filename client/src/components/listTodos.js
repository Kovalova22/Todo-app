import React, { Component } from 'react';
import Todo from './todo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

class ListTodos extends Component{
    render() {
        return (
            <div>
                {this.props.todos.map((todo) => (
                    <div key={todo.id}>
                         <Todo key={todo.id} todo={todo} />
                         <input type='checkbox'/>
                         <button type= 'button'
                         onClick={() => this.props.dispatch({type:'DELETE_TODO', id: todo.id})}>Delete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps)(ListTodos)