import styled from 'styled-components';

const FormModeSelectContainer = ({
	className,
	mode,
	setMode,
	setIsRunning,
	setSeconds,
}) => {
	return (
		<form className={className}>
			<label>
				<input
					type="radio"
					name="mode"
					value="timer"
					checked={mode === 'timer'}
					onChange={() => {
						setMode('timer');
						setIsRunning(false);
						setSeconds(0);
					}}
				/>
				Таймер
			</label>
			<label>
				<input
					type="radio"
					name="mode"
					value="stopwatch"
					checked={mode === 'stopwatch'}
					onChange={() => {
						setMode('stopwatch');
						setIsRunning(false);
						setSeconds(0);
					}}
				/>
				Секундомер
			</label>
		</form>
	);
};

export const FormModeSelect = styled(FormModeSelectContainer)`
	display: flex;
	line-height: 22px;
	column-gap: 20px;
	font-size: 20px;
`;
