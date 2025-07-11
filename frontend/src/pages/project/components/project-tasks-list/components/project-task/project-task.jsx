import styled from 'styled-components';

const ProjectTaskContainer = ({ className, task }) => {
	return <li className={className}>{task.title}</li>;
};

export const ProjectTask = styled(ProjectTaskContainer)``;
