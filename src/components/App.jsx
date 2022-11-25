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
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,);
    console.log(completedTodos);
    return (
      <div>
        <h1>Список завдань</h1>
        <div>
          <p>Загальна кількість пунктів:{initialTodos.length}</p>
          <p>Кількість виконаних пунктів:{initialTodos.length - todos.length}</p>
          <p>Залишилось пунктів:{todos.length }</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }

}

export default App;
