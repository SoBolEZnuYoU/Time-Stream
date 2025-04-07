import { styles } from './tasks.module.css';

export const Tasks = () => {
    const tasks = []

    return (
        <div className={styles.wrapper}>
            <ul>
                {tasks.map(({id, text}) => {
                    return (
                        <li className={styles.task} key={id}>
                            {text}
                            <div className={styles['btn-box']}>
                                <button>У</button>
                                <button>Р</button>
                                <button>К</button>
                            </div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}
