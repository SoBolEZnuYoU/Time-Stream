import { useNavigate } from 'react-router';
import { Button, Search, Tabs } from '../../components';
import { Project } from './components';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
	const projects = [
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

    const navigate = useNavigate()

	return (
		<div className={className}>
			<Tabs />
			<div className="main">
				<div className="create-search-block">
					<Button width="250px" onClick={() => navigate('/create-project')}>Создать проект</Button>
					<Search placeholder="Введите название проекта" />
				</div>
				<ul className="list">
					{projects.map(({ id, title, created_at }) => {
						return <Project title={title} created_at={created_at} key={id} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export const Projects = styled(ProjectsContainer)`
	& .main {
		padding: 30px 50px;

		& .create-search-block {
			display: flex;
			justify-content: space-between;
			margin-bottom: 70px;
		}

		& .list {
			display: flex;
			column-gap: 73px;
			row-gap: 50px;
			flex-wrap: wrap;
		}
	}
`;
