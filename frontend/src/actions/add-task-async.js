import { refreshTasks } from './refresh-tasks';

export const addTaskAsync = (request, title, userId) => (dispatch) => {
	request('/api/tasks', 'POST', { title, userId }).then(() => {
		dispatch(refreshTasks);
	});
};
