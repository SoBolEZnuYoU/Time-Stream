import { Routes, Route } from 'react-router';
import { LeftBar } from './components';
import { Projects, Tasks, Main } from './pages';
import styled from 'styled-components';

const TimeStreamContainer = ({ className }) => (
	<div className={className}>
		<LeftBar />
		<div className="content">
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

export const TimeStream = styled(TimeStreamContainer)`
	display: flex;
	width: 1350px;
	height: 100vh;
	margin: 0 auto;
	box-shadow: 0 0 20px 0 #333;

	& .content {
		background-color: #fdefdd;
		height: 100%;
        width: 100%;
	}
`;
