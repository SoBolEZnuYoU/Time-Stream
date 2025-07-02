import { ACTION_TYPE } from '../actions';

const initialProjectState = {
	id: '',
	title: '',
	created_at: '',
	amountTasks: '',
	tasks: [],
};

export const projectReducer = (state = initialProjectState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROJECT_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
