import { NotFoundTasks } from "./NotFoundTasks";
import styles from './ListTasks.module.css'
import { CardTask } from "../CardTask/CardTask";
import { Task } from "../../types/Task";

interface ListTasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function ListTasks({ tasks, setTasks }: ListTasksProps) {

    function handlerCheckTask(taskId: string) {
        const taskToUpadte = tasks.find(task => task.id === taskId) 
        taskToUpadte && (taskToUpadte.isCompleted = !taskToUpadte.isCompleted)
        setTasks([...tasks ])
    }

    function handlerDeleteTask(taskId: string) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <div className={styles.listTasks}>
            { tasks.length === 0 && <NotFoundTasks /> }
            { tasks.length > 0 && tasks.map(task => (
            <CardTask 
                key={task.id} 
                task={task} 
                ondeleteTask={handlerDeleteTask}
                onCheckTask={handlerCheckTask}
            />
            )) }
        </div>
    )
}