import { useSelector } from 'react-redux';
import { ProjectCard } from './components';
import { selectProjects } from '../../../../selectors';
import styled from 'styled-components';

const ProjectsListContainer = ({ className }) => {
	const projects = useSelector(selectProjects).projects;

	return (
		<ul className={className}>
			{projects.map((project) => (
				<ProjectCard project={project} createdAt={project.createdAt} key={project.id} />
			))}
		</ul>
	);
};

export const ProjectsList = styled(ProjectsListContainer)`
	display: flex;
	column-gap: 93px;
	row-gap: 30px;
	flex-wrap: wrap;
	overflow-y: auto;
	max-height: 700px;
`;
