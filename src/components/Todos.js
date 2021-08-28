import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
    // Móc context data ra để sử dụng
    const { todos } = useContext(TodoContext);

    // Load auth context
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="todo-list">
            {/* Gọi component TodoForm và truyền hàm addTodo() xuống component TodoForm */}
            <TodoForm />
            {isAuthenticated ? (
                <ul>
                    {todos.map((todo) => (
                        // Gọi component TodoItem và truyền todo, hàm deleteTodo() xuống component TodoItem
                        <TodoItem todo={todo} key={todo.id} />
                    ))}
                </ul>
            ) : (
                <p style={{textAlign: "center"}}>Not authorised</p>
            )}
        </div>
    );
};

export default Todos;
