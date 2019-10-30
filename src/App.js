import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos:[]
  }

//Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

//Delete My Todo Item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

//Add A Todo Item
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
        <div className="App">
          <div className='container'>
            <header style={headerStyle}>
              <h1>Todo List (made with react)</h1>
            </header>
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} /> {/* imports the addtodo page to render*/}
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> {/* imports the todos page to render*/}
              </React.Fragment>
          </div>
        </div>
    )
  }
  
}
const headerStyle = {
  background: '#123bbb',
  color: 'black',
  textAlign: 'center',
  padding: '60px'
}

export default App;
