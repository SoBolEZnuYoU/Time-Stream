import { Search, Button } from '../../../../components';
import styled from 'styled-components';

const CreateSearchBlockContainer = ({ className, onClick }) => {
	return (
		<div className={className}>
			<Button type="button" width="250px" onClick={onClick}>
				Создать задачу
			</Button>
			<Search placeholder="Введите название задачи" />
		</div>
	);
};

export const CreateSearchBlock = styled(CreateSearchBlockContainer)`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;
