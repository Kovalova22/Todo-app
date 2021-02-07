import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.todo.title}</li>
            </ul>
        );
    }
}
export default connect()(Todo);