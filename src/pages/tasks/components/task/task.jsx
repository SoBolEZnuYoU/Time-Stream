import styled from 'styled-components';
import { Icon } from '../../../../components';
import { COLOR } from '../../../../constants';

const TaskContainer = ({ className, title }) => {
	return (
		<li className={className}>
			{title}
			<div className="btn-box">
				<Icon id="fa-edit" size="26px;" onClick={() => {}} />
				<Icon id="fa-commenting-o" size="26px;" onClick={() => {}} />
				<Icon id="fa-trash-o" size="26px;" onClick={() => {}} />
			</div>
		</li>
	);
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid ${COLOR.DARK};
	border-radius: 7px;
	font-size: 20px;
	color: ${COLOR.DARK};
	padding: 5px 10px;

	&:hover {
		cursor: pointer;
		background-color: ${COLOR.HOVER};
        color: ${COLOR.LIGHT};
	}

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	& .btn-box {
		display: flex;
		gap: 7px;
	}
`;
