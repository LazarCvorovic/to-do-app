import React from 'react';
import { Checkbox } from '@carbon/react';
import deleteLogo from '../assets/delete-logo.png'; // Importujte sliku

interface TodoItemProps {
    todo: { text: string; completed: boolean };
    index: number;
    markComplete: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, markComplete, deleteTodo }) => {
    return (
        <div className="Todo">
            <Checkbox
                id={`todo-${index}`}
                labelText={todo.text}
                checked={todo.completed}
                onChange={() => markComplete(index)}
                className={todo.completed ? 'completed' : 'incompleted'}
            />
            <img
                className="delete-logo"
                src={deleteLogo}
                alt="Izbriši vnose"
                onClick={() => deleteTodo(index)}
            />
        </div>
    );
};

export default TodoItem;
