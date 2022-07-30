import {
	ADD_NEW_NOTIFICATION,
	ADD_NOTIFICATION,
	EMPTY_NOTIFICATIONS,
	REMOVE_NOTIFICATION,
} from "../ActionTypes/notifications.actiontypes";

const initalState = { notifications: [] };

export const notificationReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return { ...state, notifications: action.payload };

		case REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: [
					...state.notifications.slice(0, action.payload),
					...state.notifications.slice(action.payload + 1),
				],
			};

		case ADD_NEW_NOTIFICATION:
			return {
				...state,
				notifications: [action.payload, ...state.notifications],
			};

		case EMPTY_NOTIFICATIONS:
			return { ...state, notifications: [] };
		default:
			return state;
	}
};
