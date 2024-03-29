import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo( this.state.title );
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type='text' 
                    name='title'
                    style={{  flex: '10', padding: '10px' }} 
                    placeholder='Add Todo ...' 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type='submit'
                    value='Add Todo'
                    className='btn'
                    style={{flex: 1, backgroundColor:'rgb(30,30,30)', fontSize: 20}}
                />
            </form>
        )
    }
}

export default AddTodo
