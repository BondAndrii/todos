import React from "react";

const Todo = ({text, completed, onToggleCompleted, onDeleteTodo }) => {
    return (<>
                <input
                    type="checkbox"
                    className='TodoList__checkbox'
                    checked={completed}
                    onChange={onToggleCompleted}
                />
                <p className='TodoList__text'>{text}</p>
                <button className='TodoList__button' onClick={onDeleteTodo}>
                    Викреслити
                </button>
            </>
    );

}

export default Todo;