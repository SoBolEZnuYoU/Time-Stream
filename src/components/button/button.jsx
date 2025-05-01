import styled from 'styled-components';

const ButtonContainer = ({ className, children }) => {
	return <button className={className}>{children}</button>;
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '150px' }) => width};
	height: ${({ height = '50px' }) => height};
	border: 1px solid #333;
	border-radius: 7px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0e5dd;
	font-size: 25px;
`;
