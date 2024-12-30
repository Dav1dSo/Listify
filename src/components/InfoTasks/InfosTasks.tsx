import styles from './InfosTasks.module.css'

interface InfosTasksProps {
    totalTasks: number;
    completedTasks: number;
}

export function InfosTasks({ totalTasks, completedTasks}: InfosTasksProps) {
    return (
        <div className={styles.info}>
            <p>Tarefas criadas <span className={styles.count}>{totalTasks}</span></p>
            <p>Concluídas <span className={styles.count}>{completedTasks} de {totalTasks}</span></p>
        </div>
    )
} 