import React, { useState } from "react";
import TodoList from "./contener/todolist/TodoList.jsx";
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Submit</button>
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={handleDeleteTodo}
            />
        </div>
    );
};

export default App;