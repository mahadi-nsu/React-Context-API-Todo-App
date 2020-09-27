import React, { createContext, useState } from 'react';
// import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: "Read The Book", id: 1 },
        { title: "Write The Copy", id: 2 },
        { title: "Write Some Code ", id: 3 }
    ]);

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
    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, removeAllTask }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;

