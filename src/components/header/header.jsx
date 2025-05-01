import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const HeaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="buttons">
				<Button>
					<StyledLink to={'/'}>Главная</StyledLink>
				</Button>
				<Button>
					<StyledLink to={'/projects'}>Проекты</StyledLink>
				</Button>
				<Button>
					<StyledLink to={'/tasks'}>Задачи</StyledLink>
				</Button>
				<Button>
					<StyledLink to={'/analytick'}>Аналитика</StyledLink>
				</Button>
			</div>
			<Button type="button" width='100px' height='35px'>Войти</Button>
		</div>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	align-items: start;
	width: 100%;
	height: 150px;
	padding: 15px 30px;
	border-bottom: 1px solid #9e9e9e;

	& .buttons {
		display: flex;
        align-items: end;
        height: 100%;
		gap: 10px;
	}
`;
