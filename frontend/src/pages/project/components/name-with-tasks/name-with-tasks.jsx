import { H2, Icon, Input } from '../../../../components';
import styled from 'styled-components';
import { Task } from './components';

const NameWithTasksContainer = ({ className, title, tasks }) => {
	return (
		<div className={className}>
			<H2 className="project-name">{title}</H2>
			<ul className="tasks">
				{tasks.map((task) => (
					<Task task={task} />
				))}
			</ul>
		</div>
	);
};

export const NameWithTasks = styled(NameWithTasksContainer)`
	height: 75%;
	padding: 50px 40px;

	& .project-name {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 100px;
	}

	& .tasks {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
