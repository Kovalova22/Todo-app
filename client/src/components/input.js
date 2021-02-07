import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoInput extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const data = {
            id: Math.floor(Math.random() * (100)),
            title
        }
        this.props.dispatch({
            type: 'ADD_TODO',
            data
        });
        this.getTitle.value='';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='Add Todo' ref={(input) => this.getTitle=input}/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}
export default connect()(TodoInput);