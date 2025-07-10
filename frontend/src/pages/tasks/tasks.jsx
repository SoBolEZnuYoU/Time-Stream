import { Tabs, CreateSearchBlock } from '../../components';
import { OpenedTask, TasksList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskIsOpen, selectTasks } from '../../selectors';
import { loadTaskAsync, openInputModal, openTask, setTasks } from '../../actions';
import { useEffect } from 'react';
import { request } from '../../utils';
import styled from 'styled-components';

const TasksContainer = ({ className }) => {
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks).tasks;
	const taskIsOpen = useSelector(selectTaskIsOpen);
	const refreshFlag = useSelector(selectTasks).refreshFlag;

	useEffect(() => {
		request('/api/tasks', 'GET').then(({ data }) => dispatch(setTasks(data.tasks)));
	}, [dispatch, refreshFlag]);

	const onCreateTask = () => {
		dispatch(openInputModal);
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
				<CreateSearchBlock onClick={onCreateTask} type="tasks" />
				<TasksList tasks={tasks} onClick={onOpenTask} />
			</div>
			{taskIsOpen && <OpenedTask />}
		</div>
	);
};

export const Tasks = styled(TasksContainer)`
	& .main {
		padding: 30px 50px;
	}
`;
