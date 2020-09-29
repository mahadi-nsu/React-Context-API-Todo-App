import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from "uuid";


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem("tasks")) || []

    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])


    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuid.v4 }])
    }
    const removeTask = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }
    const removeAllTask = () => {
        setTasks([]);
    }
    // edit 
    const findItem = (id) => {
        const itemToEdit = tasks.find(task => task.id === id);
        // console.log(itemToEdit);
        setEditItem(itemToEdit);
    }
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => task.id === id ? { title, id } : task);
        setTasks(newTasks);
    }
    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            removeAllTask,
            findItem,
            editTask,
            editItem
        }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;

