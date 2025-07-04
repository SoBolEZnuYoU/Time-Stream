import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { logout } from '../../actions';
import styled from 'styled-components';

const UserSettingsContainer = ({ className }) => {
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());

		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<div className="btn-block">
				<Button type="button" onClick={() => {}}>
					Сохранить
				</Button>
				<Button type="button" style="filled-dark" onClick={onLogout}>
					Выйти
				</Button>
			</div>
		</div>
	);
};

export const UserSettings = styled(UserSettingsContainer)``;
