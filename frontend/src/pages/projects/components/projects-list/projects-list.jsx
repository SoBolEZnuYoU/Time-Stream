import { useSelector } from 'react-redux';
import { ProjectCard } from './components';
import { selectProjects } from '../../../../selectors';
import styled from 'styled-components';

const ProjectsListContainer = ({ className }) => {
	const projects = useSelector(selectProjects);

	return (
		<ul className={className}>
			{projects.map(({ id, title, createdAt }) => (
				<ProjectCard title={title} createdAt={createdAt} key={id} id={id} />
			))}
		</ul>
	);
};

export const ProjectsList = styled(ProjectsListContainer)`
	display: flex;
	column-gap: 73px;
	row-gap: 50px;
	flex-wrap: wrap;
	height: 650px;
	overflow-y: auto;
`;
