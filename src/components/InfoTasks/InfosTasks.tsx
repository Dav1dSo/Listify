import styles from './InfosTasks.module.css'

export function InfosTasks() {
    return (
        <div className={styles.info}>
            <p>Tarefas criadas <span className={styles.count}>0</span></p>
            <p>Concluídas <span className={styles.count}>0</span></p>
        </div>
    )
}

