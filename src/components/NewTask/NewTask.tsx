import {TaskInput} from '../TaskInput/TaskInput'
import {Button} from '../Button/Button'
import styles from './NewTask.module.css'

export function NewTask() {         
    return (
        <div className={styles.wrapNewtask}>
            <TaskInput />
            <Button />
        </div>
    )
}