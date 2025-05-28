import { COLOR } from '../../constants';
import styled from 'styled-components';

const IconContainer = ({ className, id, onClick, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	align-items: center;
    line-height: 0px;
	color: inherit;

    i {
        line-height: 85.72%;
    }

	&:hover {
		cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
        color: ${COLOR.HOVER};
	}
`;
