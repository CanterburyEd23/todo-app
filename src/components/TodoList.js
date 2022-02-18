import React from "react";
import TodoItem from "./TodoItem.js";
import { useSelector } from "react-redux";
import TotalCompleteItems from "./TotalCompleteItems.js";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="listContainer">
            <h2>To-do List</h2>
            <ul className="list">
                {todos.map((todo) => (
                    <TodoItem id={todo.id}
                              title={todo.title}
                              completed={todo.completed}
                    />
                ))}
            </ul>
            <TotalCompleteItems></TotalCompleteItems>
        </div>
    );
};

export default TodoList;
