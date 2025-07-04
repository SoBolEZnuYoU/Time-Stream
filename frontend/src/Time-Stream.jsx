import { Routes, Route } from 'react-router';
import { LeftBar } from './components';
import {
	Analytics,
	Authorization,
	CreateProject,
	Main,
	Projects,
	Registration,
	Tasks,
	UserSettings,
} from './pages';
import styled from 'styled-components';
import { COLOR } from './constants';

const TimeStreamContainer = ({ className }) => {
	return (
		<div className={className}>
			<LeftBar />
			<div className="content">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/create-project" element={<CreateProject />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/project-management" element={<div>Управление проектом</div>} />
					<Route path="/user-settings" element={<UserSettings />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="*" element={<div>Такой страницы не существует</div>}></Route>
				</Routes>
			</div>
		</div>
	);
};

export const TimeStream = styled(TimeStreamContainer)`
	display: flex;
	width: 1350px;
	height: 100vh;
	margin: 0 auto;
	box-shadow: 0 0 20px 0 #333;

	& .content {
		background-color: ${COLOR.LIGHT};
		height: 100%;
		width: 100%;
	}
`;
