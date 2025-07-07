import { Task } from './components';
import styled from 'styled-components';

const TasksListContainer = ({ className, tasks, onClick }) => {
	return (
		<ul className={className} onClick={onClick}>
			{tasks.map(({ id, title, createdAt }) => (
				<Task title={title} createdAt={createdAt} key={id} id={id} />
			))}
		</ul>
	);
};

export const TasksList = styled(TasksListContainer)`
	height: 650px;
	overflow-y: auto;
`;
