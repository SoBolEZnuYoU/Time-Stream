import { Button } from '../../../../components';
import styled from 'styled-components';
import { COLOR } from '../../../../constants';

const CommentWithButtonsContainer = ({ className }) => {
	return (
		<div className={className}>
			<label>
				<p>Комментарии:</p>
				<textarea></textarea>
			</label>
			<div className="btn-box">
				<Button>Отменить</Button>
				<Button style="filled-dark">Создать</Button>
			</div>
		</div>
	);
};

export const CommentWithButtons = styled(CommentWithButtonsContainer)`
	display: flex;
	height: 23%;

	& label {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		width: 60%;

		& p {
			margin-left: 20px;
		}

		& textarea {
			resize: none;
			padding: 7px 5px;
			height: 100%;
			font-size: 20px;
			border: 2px solid ${COLOR.DARK};
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			border-left: none;
		}
	}

	& .btn-box {
		display: flex;
		justify-content: space-around;
		align-self: end;
		width: 40%;
	}
`;
