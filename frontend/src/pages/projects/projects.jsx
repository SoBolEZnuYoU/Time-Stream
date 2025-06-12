import { useNavigate } from 'react-router';
import { Button, Search, Tabs } from '../../components';
import { Project } from './components';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
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
