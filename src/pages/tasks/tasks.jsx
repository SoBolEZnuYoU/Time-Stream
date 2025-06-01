import { Button, Search, Tabs } from '../../components';
import styled from 'styled-components';
import { Task } from './components';

const TasksContainer = ({ className }) => {
	const tasks = [
		{
			id: 1,
			title: 'Сайт Street Coffee',
			created_at: '11.12.2024',
		},
		{
			id: 2,
			title: 'Интернет магазин одежды',
			created_at: '11.12.2024',
		},
		{
			id: 3,
			title: 'Сайт СтоиКом',
			created_at: '11.12.2024',
		},
		{
			id: 4,
			title: 'Магазин МузГаз',
			created_at: '11.12.2024',
		},
		{
			id: 5,
			title: 'Пекарня Плюшки',
			created_at: '11.12.2024',
		},
		{
			id: 6,
			title: 'Сайт КомТранс',
			created_at: '11.12.2024',
		},
		{
			id: 7,
			title: 'ГеймКлаб',
			created_at: '11.12.2024',
		},
		{
			id: 8,
			title: 'Ресторан Гастрит',
			created_at: '11.12.2024',
		},
	];

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<div className="create-search-block">
					<Button width="250px">Создать задачу</Button>
					<Search placeholder='Введите название задачи' />
				</div>
				<ul>
					{tasks.map(({ id, title }) => {
						return <Task id={id} title={title} key={id} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export const Tasks = styled(TasksContainer)`
    & .main {
		padding: 30px 50px;

		& .create-search-block {
			display: flex;
			justify-content: space-between;
			margin-bottom: 70px;
		}
`;
