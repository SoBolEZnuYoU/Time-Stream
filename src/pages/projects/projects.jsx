import styles from './projects.module.css';

export const Projects = () => {
	const projects = [];

	return (
		<div className={styles.wrapper}>
			<ul>
				{projects.map(({ id, title, created_at }) => {
					return (
						<li key={id}>
							<button className={styles.functions}>|</button>
							{title}
							<p className={styles.date}>{created_at}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
