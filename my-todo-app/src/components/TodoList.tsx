import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: { text: string; completed: boolean }[];
    markComplete: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, markComplete, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    markComplete={markComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
