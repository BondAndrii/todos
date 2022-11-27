import React from 'react';
import classNames from 'classnames';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => 
// со свойства props деструктуризируется свойство todos 
(
    <ul className='TodoList'>
        {todos.map(({id, text, completed}) => (
            <li
                key={id}
                className={classNames("TodoList__item", {
                "TodoList__item--completed": completed,
            })}>
                <input
                    type="checkbox"
                    className='TodoList__checkbox'
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                <p className='TodoList__text'>{text}</p>
                <button className='TodoList__button' onClick={() => onDeleteTodo(id)}>Викреслити</button>
            </li>
        ))}
    </ul>
)

export default TodoList