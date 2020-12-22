import React from 'react';
import styled from 'styled-components';

const GridContainer = ({ inherit, col, children, className }) => {
  return (
    <Section inherit={inherit} className={className} col={col}>
      {children}
    </Section>
  );
};

export default GridContainer;

const Section = styled.div`
  display: inherit;
  grid-template-columns: ${props =>
    props.inherit ? 'inherit' : `repeat(${props.col},1fr)`};
  grid-column: span ${props => props.col};
  column-gap: inherit;
`;
