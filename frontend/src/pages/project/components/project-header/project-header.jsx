import { H2, Icon, Input } from '../../../../components';
import styled from 'styled-components';
import { transformDate } from '../../../../utils';

const ProjectHeaderContainer = ({ className, title, createdAt }) => {
	const date = transformDate(createdAt);

	return (
		<div className={className}>
			<div className="text-block">
				<H2>{title}</H2>
				<p>{date}</p>
			</div>
			<div className="btn-box">
				<Icon id="fa-edit" size="39px" y="5px" />
				<Icon id="fa-trash-o" size="40px" />
			</div>
		</div>
	);
};

export const ProjectHeader = styled(ProjectHeaderContainer)`
	padding: 40px;
	display: flex;
	justify-content: space-between;
	align-items: start;

	& h2 {
		margin-bottom: 10px;
	}

	& .btn-box {
		display: flex;
		column-gap: 20px;
	}
`;
