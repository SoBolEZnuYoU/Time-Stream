import { refreshTasks } from './refresh-tasks';

export const addTaskAsync = (request, title) => (dispatch) => {
	request('/api/tasks', 'POST', { title }).then(() => {
		dispatch(refreshTasks);
	});
};
