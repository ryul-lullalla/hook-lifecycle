import React from 'react';
import styled from 'styled-components';

const GridContainer = ({ col, children, className }) => {
  return (
    <Section className={className} col={col}>
      {children}
    </Section>
  );
};

export default GridContainer;

const Section = styled.div`
  display: inherit;
  grid-template-columns: inherit;
  grid-column: span ${props => props.col};
  column-gap: inherit;
`;
