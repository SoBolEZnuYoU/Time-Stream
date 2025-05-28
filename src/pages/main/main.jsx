import { Icon } from '../../components';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="timer-block">
				<div>
					<p>00:00</p>
				</div>
				<div className="timer-controls">
					{/*выбор таймера или секундомера*/}
					<div className="btn-box">
						<Icon id="fa-play-circle-o" size="100px" onClick={() => {}} />
						<Icon id="fa-pause-circle-o" size="100px" onClick={() => {}} />
						<Icon id="fa-stop-circle-o" size="100px" onClick={() => {}} />
					</div>
				</div>
			</div>
			<div className="select-block">{/* выбор проекта или задачи */}</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	height: 100%;

	& .timer-block {
		display: flex;
        justify-content: center;
		align-items: end;
		gap: 30px;
		height: 45%;
		width: 100%;
		font-size: 240px;
		line-height: 80%;
		color: ${COLOR.DARK};
        border-bottom: 2px solid ${COLOR.DARK};
        padding-bottom: 30px;

		& .btn-box {
			display: flex;
			column-gap: 15px;
		}
	}

	& .select-block {
		height: 55%;
	}
`;
