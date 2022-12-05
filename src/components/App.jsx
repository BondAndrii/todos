import React, { Component } from "react";
import { nanoid } from "nanoid";
import initialTodos from '../todos.json';
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import Filter from "./Filter/Filter";
import Modal from "./Modal";
import IconButton from "./IconButton/IconButton";
import { ReactComponent as GalIcon } from '../icons/galochka.svg';



class App extends Component {
  state = {
    // todos: [],
    todos: initialTodos,
    filter: '',
    showModal: false,
  }
  componentDidMount() {
    console.log('componentDidMount')

    const todos = localStorage.getItem('todos');
    console.log("todos", todos)
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
    // console.log("parsedTodos", parsedTodos)
    // this.setState({todos: parsedTodos})
  }
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    // console.log("componentDidUpdate");
    // console.log(prevState);
    // console.log(this.state);
    if (nextTodos !== prevTodos) {
      console.log("Змінилась кількість пунктів списку");
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length!== 0) {
      this.toggleModal();
    }
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
    // this.toggleModal();
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
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
  }))
  }
  render() {
    const { todos, filter, showModal} = this.state;
    const totalTodosCount = initialTodos.length;
    const actualityTodosCount = todos.length;
    const completedTodos = totalTodosCount - actualityTodosCount;    
    const visibleTodos = this.getVisibleTodos();
    // const modalRoot = document.querySelector('modal-root');
    // console.log(modalRoot);
    return (
      <div>
        
        <IconButton onClick={this.toggleModal}><GalIcon width="40" height="40" fill="black"/></IconButton>
        {/* <button type="button" onClick={this.toggleModal}>Дістань модалку</button> */}
        {showModal &&
          <Modal onClose={this.toggleModal}>
          <TodoEditor onSubmit={this.addTodo} />
          <button type="button" onClick={this.toggleModal}>Сховай модалку</button>
        </Modal> }
        <div>
          <p>Загальна кількість пунктів:{totalTodosCount}</p>
          <p>Кількість виконаних пунктів:{completedTodos}</p>
          <p>Залишилось пунктів:{actualityTodosCount }</p>
        </div>
        
        
        <h1>Список вдосконалень</h1>
        <Filter value={filter} onChange={this.changeFilter } />
        {/* <label>Сортування по назві:<input type="text" value={filter} onChange={this.changeFilter} /></label> */}
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
        
      </div>
    );
  }

}

export default App;
