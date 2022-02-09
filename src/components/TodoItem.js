import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => { //We set up a method to handle the delete button being clicked.
        dispatch(deleteTodo({ id })); //We pass in the id of the relevant todo, and dispatch our deleteTodo instruction to the store and its reducer
    };
    
    return (
        <li className="listItemContainer">
            <span>
                <input type="checkbox"
                       onClick={handleCheckboxClick}
                       checked={completed}                       
                ></input>
                {title}                
            </span>
            <button className="button" onClick={handleDeleteClick}>
                    Delete
            </button>
        </li>
    );
};

export default TodoItem;