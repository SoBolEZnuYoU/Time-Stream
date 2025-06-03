import { ActivityTable, Projects } from './components';
import styled from 'styled-components';

const AnalyticsContainer = ({ className }) => {
	return (
		<div className={className}>
			<ActivityTable />
			<Projects />
		</div>
	);
};

export const Analytics = styled(AnalyticsContainer)`
	height: 100%;
`;
