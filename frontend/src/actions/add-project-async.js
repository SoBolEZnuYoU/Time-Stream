import { refreshProjects } from './refreshProjects';

export const addProjectAsync = (request, title) => (dispatch) => {
	request('api/projects', 'POST', { title }).then(() => {
		dispatch(refreshProjects);
	});
};
