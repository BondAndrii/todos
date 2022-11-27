import React, {Component} from "react";
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import initialTodos from '../todos.json';
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    todos: initialTodos,
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
  
  render() {
    const { todos } = this.state;
    const totalTodosCount = initialTodos.length;
    const actualityTodosCount = todos.length;
    const completedTodos = totalTodosCount - actualityTodosCount;
    
    return (
      <div>
        <div>
          <p>Загальна кількість пунктів:{totalTodosCount}</p>
          <p>Кількість виконаних пунктів:{completedTodos}</p>
          <p>Залишилось пунктів:{actualityTodosCount }</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <h1>Список вдосконалень</h1>
        
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
        
      </div>
    );
  }

}

export default App;
