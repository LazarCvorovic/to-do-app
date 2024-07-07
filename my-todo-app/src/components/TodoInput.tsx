import React, { useState } from 'react';
import { TextInput, Button } from '@carbon/react';

interface TodoInputProps {
    addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div className="TodoForm">
            <TextInput
                id="todo-input"
                labelText="New Task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
            />
            <Button onClick={handleAddTodo} className="todo-btn">Add</Button>
        </div>
    );
};

export default TodoInput;
