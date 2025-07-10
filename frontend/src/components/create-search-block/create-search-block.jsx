import { Search } from '../search/search';
import { Button } from '../button/button';
import styled from 'styled-components';

const CreateSearchBlockContainer = ({ className, onClick, type }) => {
	const isTasks = type === 'tasks';
	return (
		<div className={className}>
			<Button type="button" width="250px" onClick={onClick}>
				Создать {isTasks ? 'задачу' : 'проект'}
			</Button>
			<Search placeholder={`Введите название ${isTasks ? 'задачи' : 'проекта'}`} />
		</div>
	);
};

export const CreateSearchBlock = styled(CreateSearchBlockContainer)`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;
