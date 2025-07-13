import { CreateSearchBlock, Pagination } from '../../components';
import { OpenedTask, TasksList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskIsOpen, selectTasks } from '../../selectors';
import {
	addTaskAsync,
	closeModal,
	loadTaskAsync,
	loadTasksAsync,
	openInputModal,
	openTask,
} from '../../actions';
import { useEffect, useMemo, useState } from 'react';
import { debounce, request } from '../../utils';
import styled from 'styled-components';

const TasksContainer = ({ className }) => {
	const dispatch = useDispatch();
	const taskIsOpen = useSelector(selectTaskIsOpen);
	const refreshFlag = useSelector(selectTasks).refreshFlag;
	const lastPage = useSelector(selectTasks).lastPage;

	const [page, setPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	useEffect(() => {
		dispatch(loadTasksAsync(request, page, searchPhrase));
	}, [dispatch, refreshFlag, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

	const onCreateTask = () => {
		dispatch(
			openInputModal({
				onConfirm: (title) => {
					dispatch(addTaskAsync(request, title));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const onOpenTask = ({ target }) => {
		if (target.className === 'title') {
			dispatch(loadTaskAsync(request, target.id));
			dispatch(openTask);
		}
	};

	return (
		<div className={className}>
			<div className="main">
				<CreateSearchBlock
					onClick={onCreateTask}
					type="tasks"
					searchPhrase={searchPhrase}
					onChange={onSearch}
				/>
				<TasksList onClick={onOpenTask} />
			</div>
			{lastPage > 1 && <Pagination page={page} setPage={setPage} lastPage={lastPage} />}
			{taskIsOpen && <OpenedTask />}
		</div>
	);
};

export const Tasks = styled(TasksContainer)`
	& .main {
		padding: 30px 50px;
	}
`;
