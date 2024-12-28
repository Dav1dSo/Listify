import { useState } from 'react'
import plus from '../../assets/plus.svg'
import { Task } from '../../types/Task'
import styles from './NewTask.module.css'
import { nanoid } from 'nanoid'

interface NewTaskProps { 
    onCreateTask: (task: Task) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {   
    
    const [formTask, setFormTask] = useState('')
    
    function handlerFormTask(event: React.ChangeEvent<HTMLInputElement>) {
        setFormTask(event.target.value)
    }   
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const newTask = {
            id: nanoid(),
            content: formTask,
            isCompleted: false
        }
        
        onCreateTask(newTask)
        setFormTask('') 
    }

    return (
        <form onSubmit={handleSubmit} className={styles.wrapNewtask}>
            <input 
                className={styles.taskInput} 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={handlerFormTask}
                value={formTask}
            />
            <button type="submit" className={styles.button}>
                <span>Criar</span>
                <img className={styles.iconPlus} src={plus} alt="icone de plus" />
            </button>
        </form>
    )
}