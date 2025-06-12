import { NameWithTasks, CommentsWithButtons } from './components';
import { COLOR } from '../../constants';
import styled from 'styled-components';

const CreateProjectContainer = ({ className }) => {
	return (
		<div className={className}>
			<NameWithTasks />
			<CommentsWithButtons />
		</div>
	);
};

export const CreateProject = styled(CreateProjectContainer)`
	height: 100%;
	color: ${COLOR.DARK};
	font-size: 24px;
	font-weight: bold;
`;
