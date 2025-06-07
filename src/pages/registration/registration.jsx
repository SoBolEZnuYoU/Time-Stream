import { H2, Input, Button } from '../../components';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const RegistrationContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form>
				<Input type="text" placeholder="Логин"></Input>
				<Input type="password" placeholder="Пароль"></Input>
				<Input type="check-password" placeholder="Повторите пароль"></Input>
				<Button width="270px" style="filled-dark" type="submit">
					Зарегистрироваться
				</Button>
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
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
