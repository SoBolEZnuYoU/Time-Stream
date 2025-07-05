import { ACTION_TYPE } from '../actions';

const initialTasksState = {
	tasks: [],
};

export const tasksReducer = (state = initialTasksState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		default:
			return state;
	}
};
