import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { COLOR } from '../../constants';

const SearchContainer = ({ className, placeholder }) => {
	return (
		<div className={className}>
			<input
				type="text"
				name="project"
                placeholder={placeholder}
				className="input"
			></input>
			<Icon id="fa-search" color={COLOR.DARK} />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
    column-gap: 10px;
	width: 300px;
	background-color: #fff;
	border: 2px solid ${COLOR.DARK};
	border-radius: 7px;
	padding-inline: 10px;

    & .input {
        width: 100%;
        font-size: 18px;
    }
`;
