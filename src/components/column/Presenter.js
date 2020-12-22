import React from 'react';
import styled from 'styled-components';

const Column = props => {
  return (
    <Section className={props.className} col={props.col}>
      {props.children}
    </Section>
  );
};

export default Column;
const Section = styled.div`
  grid-column: ${props => props.col};
`;
