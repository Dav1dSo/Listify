import { NotFoundTasks } from "./NotFoundTasks";
import styles from './ListTasks.module.css'
import { CardTask } from "../CardTask/CardTask";

export function ListTasks() {

    const tasks = [1]

    return (
        <div className={styles.listTasks}>
            { tasks.length === 0 && <NotFoundTasks /> }
            { tasks.length > 0 && <CardTask /> }
        </div>
    )
}