import { CreateSearchBlock } from '../../components';
import { ProjectsList } from './components';
import { useEffect } from 'react';
import { request } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { addProjectAsync, closeModal, openInputModal, setProjects } from '../../actions';
import { selectProjects } from '../../selectors';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
	const dispatch = useDispatch();
	const refreshFlag = useSelector(selectProjects).refreshFlag;

	useEffect(() => {
		request('/api/projects', 'GET').then(({ data }) =>
			dispatch(setProjects(data.projects)),
		);
	}, [dispatch, refreshFlag]);

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
			<div className="main">
				<CreateSearchBlock onClick={onCreateProject} />
				<ProjectsList />
			</div>
		</div>
	);
};

export const Projects = styled(ProjectsContainer)`
	& .main {
		padding: 30px 50px;
	}
`;
