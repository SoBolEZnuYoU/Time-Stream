import { Routes, Route } from 'react-router';
import { Header } from './components';
import { Projects, Tasks } from './pages';
import { styles } from './time-meneger.css';

export const TimeManager = () => (
	<div className={styles.wrapper}>
		<Header />
		<div className={styles.content}>
			<Routes>
				<Route to="/" element={<Header />} />
				<Route to="/projects" element={<Projects />} />
				<Route to="/tasks" element={<Tasks />} />
				<Route to="/analytics" element={<div>Аналитика</div>} />
				<Route to="/project-management" element={<div>Управление проектом</div>} />
				<Route to="/user-settings" element={<div>Настройки пользователя</div>} />
				<Route to="/authorization" element={<div>Авторизация</div>} />
			</Routes>
		</div>
	</div>
);
