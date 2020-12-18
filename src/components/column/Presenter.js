import React from 'react';
import styled from 'styled-components';

const Column = props => {
  return <Section col={props.col}>{props.children}</Section>;
};

export default Column;

const Section = styled.div`
  grid-column: span ${props => props.col};
`;
