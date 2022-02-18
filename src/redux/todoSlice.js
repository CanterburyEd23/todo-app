import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "example To-do", completed: false },
    ],
    reducers: {
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
            if (state[0].id === 1) {
                state.shift();
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { toggleComplete, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
