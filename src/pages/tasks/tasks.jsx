import styled from 'styled-components';

const TasksContainer = ({ className }) => {
	const tasks = [];

	return (
		<div className={className}>
			<ul>
				{tasks.map(({ id, text }) => {
					return (
						<li className="task" key={id}>
							{text}
							<div className="btn-box">
								<button>У</button>
								<button>Р</button>
								<button>К</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const Tasks = styled(TasksContainer)``