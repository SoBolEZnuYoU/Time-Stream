import { useNavigate } from 'react-router';
import { Button, Input, H2 } from '../../components';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const AuthorizationContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form>
				<Input type="text" placeholder="Логин"></Input>
				<Input type="password" placeholder="Пароль"></Input>
				<Button width='250px' style='filled-dark' type="submit">
					Авторизоваться
				</Button>
				<Button width='250px' onClick={() => navigate('/register')}>Регистрация</Button>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	margin-top: 200px;
    border-block: 2px solid ${COLOR.DARK};
    padding-block: 25px;

	& form {
		display: flex;
		flex-direction: column;
        align-items: center;
		gap: 15px;
		width: 350px;
	}
`;
