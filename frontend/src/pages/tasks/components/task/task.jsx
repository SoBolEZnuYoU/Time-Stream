import { COLOR } from '../../../../constants';
import styled from 'styled-components';
import { OpenedTask } from './components/opened-task/opened-task';

const TaskContainer = ({ className, title, createdAt }) => {
	const date = new Date(createdAt).toLocaleString('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	return (
		<>
			<li className={className}>
				<p className="title">{title}</p>
				<p className="createdAt">{date}</p>
			</li>
			<OpenedTask text={title} />
		</>
	);
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${COLOR.DARK};
	font-size: 20px;
	color: ${COLOR.DARK};
	padding: 5px 10px;

	& .title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 865px;
	}

	& .createdAt {
		width: 100px;
	}

	&:hover {
		cursor: pointer;
		background-color: ${COLOR.HOVER};
		color: ${COLOR.LIGHT};
		border-radius: 14px;
	}

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
