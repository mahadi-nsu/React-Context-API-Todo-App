import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';


export const TaskForm = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');

    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
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
                    className="btn clear-btn"
                >Delete All</button>
            </div>
        </form>
    )
}
