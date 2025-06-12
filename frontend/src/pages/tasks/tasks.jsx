import { Button, Search, Tabs } from '../../components';
import styled from 'styled-components';
import { Task } from './components';

const TasksContainer = ({ className }) => {

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<div className="create-search-block">
					<Button width="250px">Создать задачу</Button>
					<Search placeholder='Введите название задачи' />
				</div>
				<ul>
				</ul>
			</div>
		</div>
	);
};

export const Tasks = styled(TasksContainer)`
    & .main {
		padding: 30px 50px;

		& .create-search-block {
			display: flex;
			justify-content: space-between;
			margin-bottom: 70px;
		}
`;
