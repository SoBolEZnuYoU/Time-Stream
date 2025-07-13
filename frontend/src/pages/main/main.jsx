import { Button } from '../../components';
import { ROLE } from '../../constants';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import styled from 'styled-components';
import { TimerStopwatch } from './components';

const MainContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);

	const isUser = roleId === ROLE.USER;
	return (
		<div className={className}>
			<TimerStopwatch />
			<div className="select-block">
				{isUser && (
					<Button width="300px" style="filled-dark">
						Выбрать проект
					</Button>
				)}
				<Button width="300px">Выбрать задачу</Button>
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	height: 100%;

	& .select-block {
		height: 55%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 0 auto;
		padding: 150px;
	}
`;
