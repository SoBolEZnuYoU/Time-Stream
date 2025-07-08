import { ACTION_TYPE } from '../actions';

const initialAppState = {
	inputModal: {
		isOpen: false,
		question: '',
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_INPUT_MODAL:
			return {
				...state,
				inputModal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return {
				...initialAppState,
			};
		default:
			return state;
	}
};
