import { ACTION_TYPE } from '../actions';

const initialProjectsState = {
	projects: [],
};

export const projectsReducer = (state = initialProjectsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROJECTS:
			return {
				...state,
				projects: action.payload,
			};
		default:
			return state;
	}
};
