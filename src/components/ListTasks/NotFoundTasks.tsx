import clipboard from '../../assets/Clipboard.svg'
import styles from './NotFoundTasks.module.css'

export function NotFoundTasks() {

    return (
        <div className={styles.notFoundTasks}>
            <img src={clipboard} alt="" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}