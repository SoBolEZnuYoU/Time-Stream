import { Button, Modal, Search, Tabs } from '../../components';
import styled from 'styled-components';
import { Task } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalIsOpen, selectTasks } from '../../selectors';
import { openModal, setTasks } from '../../actions';
import { useEffect, useState } from 'react';
import { request } from '../../utils';

const TasksContainer = ({ className }) => {
	const modalIsOpen = useSelector(selectModalIsOpen);
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);

	const [refreshTasks, setRefreshTasks] = useState(false);

	useEffect(() => {
		request('/api/tasks', 'GET').then(({ data }) => dispatch(setTasks(data.tasks)));
	}, [dispatch, refreshTasks]);

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<div className="create-search-block">
					<Button type="button" width="250px" onClick={() => dispatch(openModal)}>
						Создать задачу
					</Button>
					<Search placeholder="Введите название задачи" />
				</div>
				<ul className="list">
					{tasks.map(({ id, title, createdAt }) => (
						<Task title={title} createdAt={createdAt} key={id} />
					))}
				</ul>
			</div>
			{modalIsOpen && (
				<Modal refreshFlag={refreshTasks} setRefreshFlag={setRefreshTasks} />
			)}
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
