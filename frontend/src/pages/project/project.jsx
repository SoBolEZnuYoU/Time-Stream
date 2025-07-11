import { ProjectHeader, Comment, ProjectTasksList } from './components';
import { COLOR } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectProject } from '../../selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { loadProjectAsync } from '../../actions';
import { request } from '../../utils';
import styled from 'styled-components';

const ProjectContainer = ({ className }) => {
	const project = useSelector(selectProject);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(loadProjectAsync(request, params.id));
	}, [dispatch, params.id]);

	return (
		<div className={className}>
			<ProjectHeader title={project.title} createdAt={project.createdAt} />
            <ProjectTasksList tasks={project.tasks}/>
			<Comment  comment={project.comment}/>
		</div>
	);
};

export const Project = styled(ProjectContainer)`
	height: 100%;
	color: ${COLOR.DARK};
	font-size: 24px;
	font-weight: bold;
`;
