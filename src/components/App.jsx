import React, {Component} from "react";
import TodoList from "./TodoList";
import initialTodos from '../todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  }
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
      
    }));
  };
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
  
  render() {
    const { todos } = this.state;
    const totalTodosCount = initialTodos.length;
    const actualityTodosCount = todos.length;
    const completedTodos = totalTodosCount - actualityTodosCount;
    
    return (
      <div>
        <h1>Список завдань</h1>
        <div>
          <p>Загальна кількість пунктів:{totalTodosCount}</p>
          <p>Кількість виконаних пунктів:{completedTodos}</p>
          <p>Залишилось пунктів:{actualityTodosCount }</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={ this.toggleCompleted} />
      </div>
    );
  }

}

export default App;
