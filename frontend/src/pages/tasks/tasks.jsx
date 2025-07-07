import { Modal, Tabs } from '../../components';
import { CreateSearchBlock, OpenedTask, TasksList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskIsOpen, selectTasks } from '../../selectors';
import { loadTaskAsync, openModal, openTask, setTasks } from '../../actions';
import { useEffect, useState } from 'react';
import { request } from '../../utils';
import styled from 'styled-components';

const TasksContainer = ({ className }) => {
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);
	const taskIsOpen = useSelector(selectTaskIsOpen);

	const [refreshTasks, setRefreshTasks] = useState(false);

	useEffect(() => {
		request('/api/tasks', 'GET').then(({ data }) => dispatch(setTasks(data.tasks)));
	}, [dispatch, refreshTasks]);

	const onCreateTask = () => {
		dispatch(openModal);
		setRefreshTasks(!refreshTasks);
	};

	const onOpenTask = ({ target }) => {
		if (target.className === 'title') {
			dispatch(loadTaskAsync(request, target.id));
			dispatch(openTask);
		}
	};

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<CreateSearchBlock onClick={onCreateTask} />
				<TasksList tasks={tasks} onClick={onOpenTask} />
			</div>
			{taskIsOpen && (
				<OpenedTask refreshTasks={refreshTasks} setRefreshTasks={setRefreshTasks} />
			)}
		</div>
	);
};

export const Tasks = styled(TasksContainer)`
	& .main {
		padding: 30px 50px;
	}
`;
