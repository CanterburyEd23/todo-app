import React from 'react';
import './App.css';
import TodoList from './components/TodoList.js';
import AddTodoForm from './components/AddTodoForm.js';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
    return (
        <div className="appContainer">
            <AppHeader></AppHeader>
            <TodoList></TodoList>
            <AddTodoForm></AddTodoForm>
            <AppFooter></AppFooter>                
        </div>
    );
}

export default App;
