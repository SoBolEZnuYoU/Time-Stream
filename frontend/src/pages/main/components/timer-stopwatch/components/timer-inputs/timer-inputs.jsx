import styled from 'styled-components';
import { Input } from '../../../../../../components';

const TimerInputsContainer = ({
	className,
	minutes,
	setMinutes,
	seconds,
	setSeconds,
}) => {
	return (
		<div className={className}>
			<Input
				width="70px"
				type="number"
				value={minutes}
				onChange={(e) => setMinutes(Math.max(0, e.target.value))}
			/>
			<span>:</span>
			<Input
				width="70px"
				type="number"
				value={seconds}
				onChange={(e) => setSeconds(Math.max(0, e.target.value))}
			/>
		</div>
	);
};

export const TimerInputs = styled(TimerInputsContainer)`
	font-size: 40px;
	display: flex;
	gap: 15px;
`;
