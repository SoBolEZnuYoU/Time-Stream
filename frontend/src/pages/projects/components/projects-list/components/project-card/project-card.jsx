import { useNavigate } from 'react-router';
import { Icon } from '../../../../../../components';
import { COLOR } from '../../../../../../constants';
import styled from 'styled-components';

const ProjectCardContainer = ({ className, id, title, created_at }) => {
	const navigate = useNavigate();
	return (
		<li className={className} onClick={() => navigate(`/project/${id}`)}>
			<Icon id="fa-folder" size="150px" color={COLOR.ORANGE} />
			<div className="text-block">
				<p className="title">{title}</p>
				<p className="date">{created_at}</p>
			</div>
		</li>
	);
};

export const ProjectCard = styled(ProjectCardContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 180px;
	font-size: 20px;
	color: ${COLOR.DARK};
	cursor: pointer;

	& .text-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 7px;
		height: 100%;
		text-align: center;

		& .date {
			width: 100%;
			font-size: 16px;
			text-align: end;
		}
	}
`;
