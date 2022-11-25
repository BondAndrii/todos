import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => 
// со свойства props деструктуризируется свойство todos 
(
    <ul className='TodoList'>
        {todos.map(({id, text}) => (
            <li key={id} className="TodoList__item">
                <p className='TodoList__text'>{text}</p>
                <button className='TodoList__button' onClick={() => onDeleteTodo(id)}>Викреслити</button>
            </li>
        ))}
    </ul>
)

export default TodoList