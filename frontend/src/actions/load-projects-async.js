import { setProjects } from './set-projects';

export const loadProjectsAsync = (request, page, searchPhrase) => (dispatch) => {
	return request(
		`/api/projects?search=${searchPhrase}&page=${page}&limit=${12}`,
		'GET',
	).then(({ data }) => {
		dispatch(setProjects(data));
	});
};
