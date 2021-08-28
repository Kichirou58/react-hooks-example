import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";

const TodoItem = ({ todo }) => {
    // Load context
    const { theme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    // Load context todos
    const { dispatch } = useContext(TodoContext);

    return (
        <li
            onClick={() => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        id: todo.id,
                    },
                });
            }}
            style={style}
        >
            {todo.title}
        </li>
    );
};

export default TodoItem;
