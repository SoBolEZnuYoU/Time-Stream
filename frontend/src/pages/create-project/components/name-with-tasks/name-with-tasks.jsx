import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const NameWithTasksContainer = ({ className }) => {
	return (
		<div className={className}>
			<label className="project-name">
				Название проекта
				<Input type="text" width="600px" />
			</label>
			<div className="tasks">
				<label className="task">
					Задача
					<Input type="text" />
				</label>
				<Icon id="fa-plus-square-o" size="40px" />
			</div>
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

		& .task {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 100%;
			margin-bottom: 15px;
		}
	}
`;
