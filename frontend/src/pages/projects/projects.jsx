import { CreateSearchBlock, Pagination } from '../../components';
import { ProjectsList } from './components';
import { useEffect, useMemo, useState } from 'react';
import { debounce, request } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProjectAsync,
	closeModal,
	loadProjectsAsync,
	openInputModal,
} from '../../actions';
import { selectProjects } from '../../selectors';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
	const dispatch = useDispatch();

	const refreshFlag = useSelector(selectProjects).refreshFlag;
	const lastPage = useSelector(selectProjects).lastPage;

	const [page, setPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	useEffect(() => {
		dispatch(loadProjectsAsync(request, page, searchPhrase));
	}, [dispatch, refreshFlag, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const onCreateProject = () => {
		dispatch(
			openInputModal({
				onConfirm: (title) => {
					dispatch(addProjectAsync(request, title));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	return (
		<div className={className}>
			<CreateSearchBlock
				onClick={onCreateProject}
				searchPhrase={searchPhrase}
				onChange={onSearch}
			/>
			<ProjectsList />
			{lastPage > 1 && <Pagination page={page} setPage={setPage} lastPage={lastPage} />}
		</div>
	);
};

export const Projects = styled(ProjectsContainer)`
	padding: 30px 50px;
`;
