import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';


export const TaskForm = () => {
    const { addTask, removeAllTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');

    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    useEffect(
        () => {
            if (editItem != null) {
                setTitle(editItem.title);
                console.log(editItem);
            } else {
                setTitle("");
            }
        }, [editItem]
    );
    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <input
                onChange={handleChange}
                value={title}
                type="text"
                className="task-input"
                placeholder="Add Task"
                required
            />
            <div className="buttons">
                <button
                    type="submit"
                    className="btn add-task-btn"
                >Add Task</button>
                <button
                    onClick={removeAllTask}
                    className="btn clear-btn"
                >Delete All</button>
            </div>
        </form>
    )
}
