import { ACTION_TYPE } from '../actions';

const initialProjectsState = {
	refreshFlag: false,
	projects: [],
};

export const projectsReducer = (state = initialProjectsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROJECTS:
			return {
				...state,
				projects: action.payload,
			};
		case ACTION_TYPE.REFRESH_PROJECTS:
			return {
				...state,
				refreshFlag: !state.refreshFlag,
			};
		default:
			return state;
	}
};
