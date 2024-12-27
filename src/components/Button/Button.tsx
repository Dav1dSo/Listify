import styles from './Button.module.css'
import plus from '../../assets/plus.svg'

export function Button() {
    return (
        <button className={styles.button}>
            <span>Criar</span>
            <img className={styles.iconPlus} src={plus} alt="icone de plus" />
        </button>
    );
}