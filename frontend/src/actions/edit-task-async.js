import { refreshTasks } from './refresh-tasks';

export const editTaskAsync = (request, id, title) => (dispatch) => {
	request(`/api/tasks/${id}`, 'PATCH', { title }).then(() => {
		dispatch(refreshTasks);
	});
};
