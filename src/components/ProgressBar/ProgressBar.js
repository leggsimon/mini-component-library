import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'--height': '8px',
		'--border-radius': '4px',
	},
	medium: {
		'--height': '12px',
		'--border-radius': '4px',
	},
	large: {
		'--height': '24px',
		'--border-radius': '8px',
		'--padding': '4px',
	},
};
const ProgressBar = ({ value, size }) => {
	return (
		<Wrapper
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuetext={`${value}% Completed`}
			style={SIZES[size]}
		>
			<BarContainer>
				<Bar value={value} />
			</BarContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: var(--height);
	border-radius: var(--border-radius);
	padding: var(--padding);
	width: 370px;
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
`;

const BarContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	overflow: hidden;
`;

const Bar = styled.div`
	width: ${(p) => p.value + '%'};
	height: 100%;
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
