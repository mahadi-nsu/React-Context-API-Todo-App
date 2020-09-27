import React from 'react'

export const TaskForm = () => {
    return (
        <form className="form">
            <input
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
