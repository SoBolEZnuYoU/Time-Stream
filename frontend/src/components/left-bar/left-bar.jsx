import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { COLOR, ROLE } from '../../constants';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin } from '../../selectors';

const StyledLink = styled(Link)`
	height: 100%;
	width: 100%;
	font-size: 30px;
	text-align: center;
	color: ${COLOR.LIGHT};
	border-bottom: 1px solid ${COLOR.LIGHT};
	padding: 20px 0;

	&:hover {
		background-color: #816959;
	}
`;

const LeftBarContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const isUser = ROLE.USER === roleId;

	return (
		<div className={className}>
			{isUser ? (
				<Button type="button" style="light" onClick={() => navigate('/user-settings')}>
					{login}
				</Button>
			) : (
				<Button type="button" style="light" onClick={() => navigate('/login')}>
					Войти
				</Button>
			)}
			<div className="page-links">
				<StyledLink to={'/'}>Главная</StyledLink>
				{isUser && <StyledLink to={'/projects'}>Проекты</StyledLink>}
				<StyledLink to={'/tasks'}>Задачи</StyledLink>
				{isUser && <StyledLink to={'/analytics'}>Аналитика</StyledLink>}
			</div>
		</div>
	);
};

export const LeftBar = styled(LeftBarContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 93px;
	width: 250px;
	height: 100%;
	padding: 15px 0;
	background-color: #6d554d;

	& .page-links {
		display: flex;
		flex-direction: column;
		align-items: end;
		height: fit-content;
		width: 100%;
	}
`;
