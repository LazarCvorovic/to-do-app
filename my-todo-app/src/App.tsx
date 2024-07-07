import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos([...todos, { text, completed: false }]);
    };

    const markComplete = (index: number) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <div className="Box">
                <h1 className="naslov">TO DO</h1>
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
};

export default App;
