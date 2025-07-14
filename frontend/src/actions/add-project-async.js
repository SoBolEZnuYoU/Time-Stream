import { refreshProjects } from './refreshProjects';

export const addProjectAsync = (request, title, userId) => (dispatch) => {
	request('api/projects', 'POST', { title, userId }).then(() => {
		dispatch(refreshProjects);
	});
};
