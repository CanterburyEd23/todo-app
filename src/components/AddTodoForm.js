import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice.js";

const AddTodoForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    title: value,
                })
            );            
        };
        setValue("");
    };

    return (
        <div className="formContainer">
            <h2>Add a Todo...</h2>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    placeholder="Add todo..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                ></input>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddTodoForm;