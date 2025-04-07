import { styles } from './analytics.module.css'

export const Analytics = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.graphics}></div>
            <div className={styles['select-btn-box']}>
                <button>Проекты</button>
                <button>Задачи</button>
            </div>
        </div>
    )
}