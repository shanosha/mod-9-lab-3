import { useState } from 'react'
import type { Task } from "./types";
import type { TaskStatus } from "./types";
import { TaskList } from "./components/TaskList/TaskList";
import './App.css'

const initialTasks : Task[] = [
    {
        id: "001",
        title: "Task 1",
        description: "Description 1",
        status: "pending",
        priority: "low",
        dueDate: "2/19/2026"
    },
    {
        id: "002",
        title: "Task 2",
        description: "Description 2",
        status: "in-progress",
        priority: "low",
        dueDate: "2/15/2026"
    },
    {
        id: "003",
        title: "Task 3",
        description: "Description 3",
        status: "completed",
        priority: "low",
        dueDate: "2/13/2026"
    }

];

function App() {

    const [tasks,setTasks] = useState (initialTasks);

    function handleStatusChange (taskId: string, taskStatus: TaskStatus) {
        setTasks((prev) => 
            prev.map((task) => {
                if(task.id === taskId){
                    return {...task, status: taskStatus}; 
                }
                else{
                    return task
                };
            })
        );
    }

    function handleDelete (taskId: string) {
        setTasks((prev) =>
            prev.filter((task) =>
                task.id !== taskId)
        )
    }

    return (
        <>
        <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
        </>
    )

}

export default App
