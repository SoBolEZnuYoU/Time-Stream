import { ACTION_TYPE } from './action-type';

export const setUsers = (users) => {
	return {
		type: ACTION_TYPE.SET_USERS,
		payload: users,
	};
};
