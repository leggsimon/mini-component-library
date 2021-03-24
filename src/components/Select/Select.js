import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<SelectWrapper defaultValue={value} onChange={onChange}>
				{children}
			</SelectWrapper>
			<PresentationBit>
				{displayedValue}
				<IconWrapper>
					<Icon id="chevron-down" size={24} />
				</IconWrapper>
			</PresentationBit>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const SelectWrapper = styled.select`
	opacity: 0;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const PresentationBit = styled.div`
	background-color: ${COLORS.transparentGray15};
	padding: 12px 16px;
	padding-right: 52px;
	border-radius: 8px;
	font-size: ${16 / 16}rem;
	font-family: 'Roboto', sans-serif;
	color: ${COLORS.gray700};

	${SelectWrapper}:hover + & {
		color: ${COLORS.black};
	}

	${SelectWrapper}:focus + & {
		outline: 5px auto -webkit-focus-ring-color;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	height: 24px;
	pointer-events: none;
`;

export default Select;
