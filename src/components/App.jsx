import React, {Component} from "react";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Попрацювати над React', completed: false },
      { id: 'id-2', text: 'Позайматись англійською', completed: false },
      { id: 'id-3', text: 'Підтягнутись, качнуть прес', completed: false },
      { id: 'id-4', text: 'Повчити планування', completed: false },
      { id: 'id-5', text: "Поспілкуватись з сім'єю", completed: false },
      { id: 'id-6', text: 'Пошук роботи', completed: false },
      
    ],
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Список завдань</h1>
          <TodoList todos={todos} />
      </div>
    );
  }

}

export default App;
