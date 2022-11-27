import React, { Component } from "react";
import { nanoid } from "nanoid";
import initialTodos from '../todos.json';
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import Filter from "./TodoList/Filter";



class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  }
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
      
    }));
  };
  addTodo = text => {    
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, todo ],
      
    }))
    console.log(todo);
  }
  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed, };
    //     }
    //     return todo;
    //   })
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === todoId
        ? {
          ...todo, completed: !todo.completed,
        }
        : todo,
      ),
      }))
  }
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter))
  }
  render() {
    const { todos, filter } = this.state;
    const totalTodosCount = initialTodos.length;
    const actualityTodosCount = todos.length;
    const completedTodos = totalTodosCount - actualityTodosCount;    
    const visibleTodos = this.getVisibleTodos();
    return (
      <div>
        <div>
          <p>Загальна кількість пунктів:{totalTodosCount}</p>
          <p>Кількість виконаних пунктів:{completedTodos}</p>
          <p>Залишилось пунктів:{actualityTodosCount }</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <h1>Список вдосконалень</h1>
        <Filter value={filter} onChange={this.changeFilter } />
        {/* <label>Сортування по назві:<input type="text" value={filter} onChange={this.changeFilter} /></label> */}
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
        
      </div>
    );
  }

}

export default App;
