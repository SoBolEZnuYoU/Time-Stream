import styled from 'styled-components';

const AnalyticsContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="graphics"></div>
			<div className="select-btn-box">
				<button>Проекты</button>
				<button>Задачи</button>
			</div>
		</div>
	);
};

export const Analytics = styled(AnalyticsContainer)``