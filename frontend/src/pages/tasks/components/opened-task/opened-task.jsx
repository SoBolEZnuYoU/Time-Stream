import { Icon } from '../../../../components';
import { COLOR } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { closeTask, openModal, removeTaskAsync } from '../../../../actions';
import { request } from '../../../../utils';
import { selectCurrentTask } from '../../../../selectors';
import styled from 'styled-components';

const OpenedTaskContainer = ({ className, refreshTasks, setRefreshTasks }) => {
	const dispatch = useDispatch();
	const task = useSelector(selectCurrentTask);

	const onDeleteTask = (id) => {
		dispatch(removeTaskAsync(request, id)).then(() => {
			dispatch(closeTask);
			setRefreshTasks(!refreshTasks);
		});
	};

	const onOpenEditModal = () => {
		dispatch(closeTask);
		dispatch(openModal);
	};

	return (
		<div className={className}>
			<div className="task">
				<div className="header">
					<Icon id="fa-arrow-left" size="30px" onClick={() => dispatch(closeTask)} />
					<div className="align-right">
						<Icon id="fa-edit" size="30px" y="3px" onClick={onOpenEditModal} />
						<Icon id="fa-trash-o" size="30px" onClick={() => onDeleteTask(task.id)} />
					</div>
				</div>
				<p>{task.title}</p>
			</div>
		</div>
	);
};

export const OpenedTask = styled(OpenedTaskContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	z-index: 100;
	backdrop-filter: blur(5px);

	& .task {
		margin-top: 20vh;
		border: 2px solid ${COLOR.DARK};
		border-radius: 14px;
		background-color: ${COLOR.LIGHT};
		width: 1000px;
		height: fit-content;
		min-height: 200px;
		padding: 20px 25px 50px;
		font-size: 24px;

		& .header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;

			& .align-right {
				display: flex;
				gap: 10px;
			}
		}
		& p {
			max-height: 450px;
			overflow-y: auto;
		}
	}
`;
