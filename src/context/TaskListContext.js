import React, { createContext, useState } from 'react';
// import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: "Read The Book", id: 1 },
        { title: "Write The Copy", id: 2 },
        { title: "Write Some Code ", id: 3 }
    ]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, { title, id: tasks.length * 1 + 1 }])
    }
    const removeTask = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }
    const removeAllTask = () => {
        setTasks([]);
    }
    const findItem = (id) => {
        const itemToEdit = tasks.find(task => task.id === id);
        // console.log(itemToEdit);
        setEditItem(itemToEdit);
    }
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => task.id === id ? { title, id } : tasks);
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

