import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';


export const TaskForm = () => {
    // const { addTask, removeAllTask, editItem, editTask } = useContext(TaskListContext);
    // const [title, setTitle] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (editItem === null) {
    //         addTask(title);
    //         setTitle('');
    //     } else {
    //         editTask(title, editItem.id)
    //     }

    // }

    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    // useEffect(
    //     () => {
    //         if (editItem != null) {
    //             setTitle(editItem.title);
    //             console.log(editItem);
    //         } else {
    //             setTitle("");
    //         }
    //     }, [editItem]
    // );
    // return (
    //     <form
    //         className="form"
    //         onSubmit={handleSubmit}
    //     >
    //         <input
    //             onChange={handleChange}
    //             value={title}
    //             type="text"
    //             className="task-input"
    //             placeholder="Add Task"
    //             required
    //         />
    //         <div className="buttons">
    //             <button
    //                 type="submit"
    //                 className="btn add-task-btn"
    //             >Add Task</button>
    //             <button
    //                 onClick={removeAllTask}
    //                 className="btn clear-btn"
    //             >Delete All</button>
    //         </div>
    //     </form>
    // )

    // const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const { addTask, removeAllTask, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
            console.log(editItem)
        } else {
            setTitle('')
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={removeAllTask}>
                    Clear
        </button>
            </div>
        </form>
    )
}
