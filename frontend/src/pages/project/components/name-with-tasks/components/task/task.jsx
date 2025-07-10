import styled from 'styled-components';

const TaskContainer = ({ className }) => {
	return <li className={className}></li>;
};

export const Task = styled(TaskContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	margin-bottom: 15px;
`;
