import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
    // Load context theme
    const { theme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    // Load context todos
    const { dispatch } = useContext(TodoContext);

    // For this component only
    const [title, setTitle] = useState("");

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        //Bỏ thao tác event mặc định của form
        event.preventDefault();
        // Call hàm addTodo() bên Todos truyền tham số vào
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: { id: uuidv4(), title },
            },
        });
        //Đưa text box về trạng thái ban đầu
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Enter a new todo"
                onChange={(event) => onChangeTitle(event)}
                value={title}
                required
            />
            <input type="submit" value="Add" style={style} />
        </form>
    );
};

export default TodoForm;
