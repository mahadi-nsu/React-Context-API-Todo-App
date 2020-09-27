import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';
import { TaskForm } from './TaskForm';

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="main">
                    <TaskListContextProvider>
                        <div>
                            <TaskForm />
                            <TaskList />
                        </div>
                    </TaskListContextProvider>
                </div>
            </div>
        </div>


    )
}
export default App;