import { Icon } from '../../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="timer-block">
				<div>
					<p>00:00</p>
				</div>
				<div className="btn-box">
					<Icon id="fa-play-circle-o" size="52px" onClick={() => {}} />
					<Icon id="fa-pause-circle-o" size="52px" onClick={() => {}} />
					<Icon id="fa-stop-circle-o" size="52px" onClick={() => {}} />
				</div>
			</div>
			<div className="select-block"></div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	width: 500px;
	height: 300px;
	border: 1px solid #9e9e9e;
	border-radius: 14px;
	background-color: #c0bfbe;
	margin: 200px auto 0;
	padding-inline: 30px;

	& .timer-block {
		display: flex;
		justify-content: space-between;
		align-items: end;
		height: 150px;
		font-size: 110px;
		line-height: 84px;
	}

	& .btn-box {
		display: flex;
		gap: 5px;
	}
`;
