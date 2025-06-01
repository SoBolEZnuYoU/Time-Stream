import { Button } from '../button/button';
import { COLOR } from '../../constants';
import styled from 'styled-components';

const TabsContainer = ({ className }) => {
	return (
		<div className={className}>
			<Button style="filled-dark" width="50%" height="80px">
				Личные
			</Button>
			<Button style="filled-dark" width="50%" height="80px">
				Рабочие
			</Button>
		</div>
	);
};

export const Tabs = styled(TabsContainer)`
	display: flex;

	& button {
		border-radius: 0px;
		position: relative;

		&::before {
			content: '';
			width: 1px;
			height: 80px;
			background-color: ${COLOR.LIGHT};
			left: -2px;
			position: absolute;
		}
	}
`;
