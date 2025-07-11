import styled from 'styled-components';
import { COLOR } from '../../../../../../constants';

const ProjectTaskContainer = ({ className, task }) => {
	return <li className={className}>{task.title}</li>;
};

export const ProjectTask = styled(ProjectTaskContainer)`
	width: 100%;
	margin-bottom: 20px;
	padding: 0 5px 5px;
	border-bottom: 1px solid ${COLOR.DARK};
`;
