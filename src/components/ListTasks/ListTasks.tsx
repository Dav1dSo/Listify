import { NotFoundTasks } from "./NotFoundTasks";
import styles from './ListTasks.module.css'
import { CardTask } from "../CardTask/CardTask";
import { Task } from "../../types/Task";

interface ListTasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setCountCheck: React.Dispatch<React.SetStateAction<number>>;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function ListTasks({ tasks, setTasks, setCountCheck, setCount }: ListTasksProps) {

    function handlerCheckTask(taskId: string) {
        const taskUpdated = tasks.find(task => task.id === taskId) 
        taskUpdated && (taskUpdated.isCompleted = !taskUpdated.isCompleted)
        
        if (taskUpdated?.isCompleted) {
            setCountCheck(state => state + 1)
            setCount(state => state - 1)
        } else {
            setCountCheck(state => state - 1)
            setCount(state => state + 1)
        }

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