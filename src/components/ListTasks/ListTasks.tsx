import { NotFoundTasks } from "./NotFoundTasks";
import styles from './ListTasks.module.css'
import { CardTask } from "../CardTask/CardTask";
import { Task } from "../../types/Task";

interface ListTasksProps {
    tasks: Task[];
}

export function ListTasks({ tasks }: ListTasksProps) {

    return (
        <div className={styles.listTasks}>
            { tasks.length === 0 && <NotFoundTasks /> }
            { tasks.length > 0 && tasks.map(task => (
            <CardTask 
                key={task.id} 
                task={task} 
            />
            )) }
        </div>
    )
}