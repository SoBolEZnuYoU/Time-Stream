import { CreateSearchBlock, Tabs } from '../../components';
import { ProjectsList } from './components';
import { useEffect } from 'react';
import { request } from '../../utils';
import { useDispatch } from 'react-redux';
import { setProjects } from '../../actions';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		request('/api/projects', 'GET').then(({ data }) =>
			dispatch(setProjects(data.projects)),
		);
	}, [dispatch]);

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<CreateSearchBlock onClick={() => {}} />
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
