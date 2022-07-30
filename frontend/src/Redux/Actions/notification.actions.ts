import {
	ADD_NEW_NOTIFICATION,
	ADD_NOTIFICATION,
	EMPTY_NOTIFICATIONS,
	REMOVE_NOTIFICATION,
} from "../ActionTypes/notifications.actiontypes";

export const addNotification = (payload: any) => {
	return { type: ADD_NOTIFICATION, payload };
};

export const removeNotification = (payload: string) => {
	return { type: REMOVE_NOTIFICATION, payload };
};

export const addNewNotification = (payload: any) => {
	return { type: ADD_NEW_NOTIFICATION, payload };
};

export const emptyNotification = () => {
	return { type: EMPTY_NOTIFICATIONS };
};
