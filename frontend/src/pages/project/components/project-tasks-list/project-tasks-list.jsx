import { Button } from '../../../../components';
import { COLOR } from '../../../../constants';
import { ProjectTask } from './components';
import styled from 'styled-components';

const ProjectTasksListContainer = ({ className, tasks }) => {
	const hasTasks = tasks.lenght > 0;

	return (
		<ul className={className}>
			{hasTasks ? (
				tasks.map(({ task }) => <ProjectTask task={task} />)
			) : (
				<p>Задачи не найдены...</p>
			)}
			<Button width={'250px'}>Создать задачу</Button>
		</ul>
	);
};

export const ProjectTasksList = styled(ProjectTasksListContainer)`
	height: 600px;
    padding: 30px;
	border-block: 1px solid ${COLOR.DARK};
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        margin-bottom: 20px;
    }
`;
