import { useDispatch } from 'react-redux';
import { Button } from '../../../../components';
import { COLOR } from '../../../../constants';
import { ProjectTask } from './components';
import { addProjectTaskAsync, closeModal, openInputModal } from '../../../../actions';
import { request } from '../../../../utils';
import styled from 'styled-components';

const ProjectTasksListContainer = ({ className, tasks, projectId }) => {
	const dispatch = useDispatch();
	const hasTasks = tasks.length > 0;

	const onCreateTask = () => {
		dispatch(
			openInputModal({
				onConfirm: (title) => {
					dispatch(addProjectTaskAsync(request, projectId, title));
					dispatch(closeModal);
				},
				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<ul className={className}>
			{hasTasks ? (
				tasks.map((task) => <ProjectTask task={task} key={task.id} />)
			) : (
				<p>Задачи не найдены...</p>
			)}
			<Button width={'250px'} onClick={onCreateTask}>
				Создать задачу
			</Button>
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
