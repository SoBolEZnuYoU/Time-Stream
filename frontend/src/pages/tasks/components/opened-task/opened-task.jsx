import styled from 'styled-components';
import { Icon } from '../../../../components';
import { COLOR } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { closeTask } from '../../../../actions';

const OpenedTaskContainer = ({ className, text }) => {
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<div className="task">
				<div className="header">
					<Icon id="fa-arrow-left" size="30px" onClick={() => dispatch(closeTask)} />
					<div className="align-right">
						<Icon id="fa-edit" size="30px" y="3px" />
						<Icon id="fa-trash-o" size="30px" />
					</div>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export const OpenedTask = styled(OpenedTaskContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	z-index: 100;
	backdrop-filter: blur(5px);

	& .task {
		margin-top: 25vh;
		border: 2px solid ${COLOR.DARK};
		border-radius: 14px;
		background-color: ${COLOR.LIGHT};
		width: 1000px;
		height: fit-content;
		min-height: 200px;
		padding: 15px 20px;
		font-size: 24px;

		& .header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;

			& .align-right {
				display: flex;
				gap: 10px;
			}
		}
	}
`;
