import { GET_TODOS, ADD_TODO, DELETE_TODO, SAVE_TODOS } from "./types";

// state chính là todos
export const todoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_TODOS:
            const todos = localStorage.getItem("todos");
            if (todos) {
                state = JSON.parse(todos);
            }
            return state;
        case SAVE_TODOS:
            localStorage.setItem("todos", JSON.stringify(payload.todos));
            return state;
        case ADD_TODO:
            return [...state, payload.todo];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id)
        default:
            return state;
    }
};
