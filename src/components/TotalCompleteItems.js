import React from 'react';
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
	const todos = useSelector((state) =>  
	    state.todos.filter((todo) => todo.completed === true)
	);
    const allTodos = useSelector((state) => state.todos);

	return <h4 className='completeItems'>Total Complete Items: {todos.length}/{allTodos.length}</h4>;
};

export default TotalCompleteItems;