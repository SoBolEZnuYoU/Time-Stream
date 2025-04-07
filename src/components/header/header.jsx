import { Link } from 'react-router'
import { styles } from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/'>Главная</Link>
            <Link to='/projects'>Главная</Link>
            <Link to='/tasks'>Главная</Link>
            <Link to='/analytick'>Главная</Link>
            <button type='button'>User</button>
        </div>
    )
}