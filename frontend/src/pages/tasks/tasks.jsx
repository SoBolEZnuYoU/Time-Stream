import { Button, Modal, Search, Tabs } from '../../components';
import { OpenedTask, Task } from './components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectTaskIsOpen,
	selectTasks,
	selectTaskText,
} from '../../selectors';
import { openModal, openTask, setTasks, setTaskText } from '../../actions';
import { useEffect, useState } from 'react';
import { request } from '../../utils';
import styled from 'styled-components';

const TasksContainer = ({ className }) => {
	const modalIsOpen = useSelector(selectModalIsOpen);
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);
	const taskIsOpen = useSelector(selectTaskIsOpen);
	const taskText = useSelector(selectTaskText);

	const [refreshTasks, setRefreshTasks] = useState(false);

	useEffect(() => {
		request('/api/tasks', 'GET').then(({ data }) => dispatch(setTasks(data.tasks)));
	}, [dispatch, refreshTasks]);

	const onCreateTask = () => {
		dispatch(openModal);
		setRefreshTasks(!refreshTasks);
	};

	const onDeleteTask = () => {};

	const onOpenTask = ({ target }) => {
		if (target.className === 'title') {
			dispatch(setTaskText(target.innerText));
			setRefreshTasks(!refreshTasks);
			dispatch(openTask);
		}
	};

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<div className="create-search-block">
					<Button type="button" width="250px" onClick={onCreateTask}>
						Создать задачу
					</Button>
					<Search placeholder="Введите название задачи" />
				</div>
				<ul className="list" onClick={onOpenTask}>
					{tasks.map(({ id, title, createdAt }) => (
						<Task title={title} createdAt={createdAt} key={id} id={id} />
					))}
				</ul>
			</div>
			{modalIsOpen && (
				<Modal refreshFlag={refreshTasks} setRefreshFlag={setRefreshTasks} />
			)}
			{taskIsOpen && <OpenedTask text={taskText} />}
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

        & .list {
            height: 650px;
            overflow: scroll;
            overflow-x: hidden;
        }
`;
