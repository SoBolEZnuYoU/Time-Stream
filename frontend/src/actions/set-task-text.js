import { ACTION_TYPE } from './action-type';

export const setTaskText = (text) => {
	return {
		type: ACTION_TYPE.SET_TASK_TEXT,
		payload: text,
	};
};
