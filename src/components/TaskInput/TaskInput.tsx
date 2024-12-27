import styles from './TaskInput.module.css'

export function TaskInput() {
    return (
        <input className={styles.taskInput} type="text" placeholder="Adicione uma nova tarefa" />
    )
}  