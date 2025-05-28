import styled from "styled-components";

const ProjectsContainer = ({className}) => {
	const projects = [];

	return (
		<div className={className}>
			<ul>
				{projects.map(({ id, title, created_at }) => {
					return (
						<li key={id}>
							<button className="functions">|</button>
							{title}
							<p className="date">{created_at}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const Projects = styled(ProjectsContainer)``
