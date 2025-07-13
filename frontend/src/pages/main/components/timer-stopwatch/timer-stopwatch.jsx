import { COLOR } from '../../../../constants';
import { Icon } from '../../../../components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormModeSelect, TimerInputs } from './components';

const TimerStopwatchContainer = ({ className }) => {
	const [mode, setMode] = useState('timer');
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval = null;

		if (isRunning && mode === 'timer' && (seconds >= 0 || minutes >= 0)) {
			interval = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(interval);
						setIsRunning(false);
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				} else {
					setSeconds(seconds - 1);
				}
			}, 1000);
		} else if (isRunning && mode === 'stopwatch') {
			interval = setInterval(() => {
				if (seconds !== 59) {
					setSeconds(seconds + 1);
				} else {
					setMinutes(minutes + 1);
					setSeconds(0);
				}
			}, 1000);
		} else if (!isRunning && seconds === 0 && minutes === 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning, seconds, minutes, mode]);

	const handleStart = () => {
		if (mode === 'stopwatch') {
			setSeconds(0);
			setMinutes(0);
		}
		setIsRunning(true);
	};

	const handleReset = () => {
		setIsRunning(false);
		setSeconds(0);
		setMinutes(0);
	};

	return (
		<div className={className}>
			<FormModeSelect
				mode={mode}
				setMode={setMode}
				setIsRunning={setIsRunning}
				setSeconds={setSeconds}
			/>
			{mode === 'timer' && isRunning === false && (
				<TimerInputs
					minutes={minutes}
					setMinutes={setMinutes}
					seconds={seconds}
					setSeconds={setSeconds}
				/>
			)}
			<p>
				{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
			</p>
			<div className="btn-box">
				<Icon id="fa-play-circle-o" size="80px" onClick={handleStart} />
				<Icon id="fa-stop-circle-o" size="80px" onClick={handleReset} />
			</div>
		</div>
	);
};

export const TimerStopwatch = styled(TimerStopwatchContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 45%;
	width: 100%;

	color: ${COLOR.DARK};
	border-bottom: 2px solid ${COLOR.DARK};
	padding-block: 30px;

	& form {
		display: flex;
		line-height: 22px;
		column-gap: 20px;
		font-size: 20px;
	}

	& p {
		font-size: 150px;
		line-height: 140px;
		width: 365px;
	}

	& .btn-box {
		display: flex;
		column-gap: 15px;
	}
`;
