import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#a9a9a9',
            fontSize: 20,
            padding: '15px',
            borderBottom: '2px #ccc solid',
            borderLeft: '2px #ccc solid',
            borderRight: '2px #ccc solid',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> 
                    {'  '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 13px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem
