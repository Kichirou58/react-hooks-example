import React, { useReducer, createContext, useEffect } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

// Tạo 1 context
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    /**
     * useState()
     * nhận vào 1 trạng thái ban khởi điểm
     * trả về 1 array gồm 2 thành phần
     * thành phần 1 là biến lưu lại trạng thái của component -> trả vào todos
     * thành phần 2 là hàm thay đổi trạng thái của component -> trả vào setTodos
     */
    // const [todos, setTodos] = useState([]);

    // reducer
    // useReducer dùng thay thế cho useState ở trên
    // Tham số 1: Kho lưu action
    // Tham số 2: giá trị khởi điểm của state mà kho có tác động đến state này
    // todos là state của useReducer này, dispatch là tượng trưng cho tất cả action trong kho useReducer này
    const [todos, dispatch] = useReducer(todoReducer, []);

    // useEffect
    // Khi component reder hoặc rerender thì useEffect sẽ được chạy
    // Khi pass [] làm tham số thứ 2 thì sẽ chỉ chạy 1 lần đầu tiên
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null,
        });
    }, []);

    // // save to local storage
    // // Cũng sẽ được chạy 1 lần đầu tiên, và từ lần sau sẽ chạy khi todos thay đổi
    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: { todos },
        });
    }, [todos]);

    // // Add todo
    // const addTodo = (todo) => {
    //     setTodos([...todos, todo]);
    // };

    // // Delete todo
    // const deleteTodo = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };

    // Context data
    const todoContextData = {
        todos,
        // addTodo,
        // deleteTodo,
        dispatch,
    };

    // Return provider: Xuất khẩu các context data
    return <TodoContext.Provider value={todoContextData}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
