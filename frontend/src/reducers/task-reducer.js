import { ACTION_TYPE } from '../actions';

const initialTaskState = {
	isOpen: false,
	text: '',
};

export const taskReducer = (state = initialTaskState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_TASK:
			return {
				...state,
				isOpen: true,
			};
		case ACTION_TYPE.CLOSE_TASK:
			return {
				...state,
				isOpen: false,
			};
		case ACTION_TYPE.SET_TASK_TEXT:
			return {
				...state,
				text: action.payload,
			};
		default:
			return state;
	}
};
