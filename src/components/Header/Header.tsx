import styles from './Header.module.css'
import logo from '../../assets/rocket.svg'
export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
            <h1>to<span>do</span></h1>
        </header>
    )
}