import { setTasksData } from './set-tasks-data';

export const loadTasksAsync = (request, page, searchPhrase) => (dispatch) => {
	return request(
		`/api/tasks?search=${searchPhrase}&page=${page}&limit=${20}`,
		'GET',
	).then(({ data }) => {
		dispatch(setTasksData(data));
	});
};
