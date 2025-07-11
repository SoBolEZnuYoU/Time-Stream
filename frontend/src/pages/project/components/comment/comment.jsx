import { COLOR } from '../../../../constants';
import styled from 'styled-components';

const CommentContainer = ({ className, comment }) => {
	return (
		<div className={className}>
			<h4>Комментарии:</h4>
			<p>{comment}</p>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& h4 {
		padding: 10px 40px;
		margin-bottom: 20px;
		background-color: ${COLOR.DARK};
		color: ${COLOR.LIGHT};
	}
`;
