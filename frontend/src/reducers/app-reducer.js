import { ACTION_TYPE } from '../actions';

const initialAppState = {
	modalIsOpen: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modalIsOpen: true,
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return {
				...state,
				modalIsOpen: false,
			};
		default:
			return state;
	}
};
