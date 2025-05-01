import { Routes, Route } from 'react-router';
import { Header } from './components';
import { Projects, Tasks, Main } from './pages';
import styles from './Time-Stream.module.css';

export const TimeStream = () => (
	<div className={styles.wrapper}>
		<Header />
		<div className={styles.content}>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/analytics" element={<div>Аналитика</div>} />
				<Route path="/project-management" element={<div>Управление проектом</div>} />
				<Route path="/user-settings" element={<div>Настройки пользователя</div>} />
				<Route path="/authorization" element={<div>Авторизация</div>} />
				<Route path="*" element={<div>Такой страницы не сузествует</div>}></Route>
			</Routes>
		</div>
	</div>
);
