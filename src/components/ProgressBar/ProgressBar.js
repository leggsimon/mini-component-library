import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	return (
		<Wrapper
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuetext={`${value}% Completed`}
		>
			<Bar value={value} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 8px;
	border-radius: 4px;
	width: 370px;
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
`;

const Bar = styled.div`
	width: ${(p) => p.value + '%'};
	height: 100%;
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
