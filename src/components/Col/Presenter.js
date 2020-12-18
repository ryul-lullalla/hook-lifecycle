// React
import React from 'react';

// styled-components
import styled from 'styled-components';

// constants
import { BREAK_POINT_DEVICE } from '@constants';

const { mobile, tablet, desktop } = BREAK_POINT_DEVICE;

const Presenter = props => {
  // variables props
  const { children, xs, md, lg } = props;

  return (
    <Col xs={xs} md={md} lg={lg}>
      {children}
    </Col>
  );
};

const Col = styled.div`
  @media ${mobile} {
    grid-column: span ${props => props.xs || '6'};
  }

  @media ${tablet} {
    grid-column: span ${props => props.md || '8'};
  }

  @media ${desktop} {
    grid-column: span ${props => props.lg || '12'};
  }
`;

export default Presenter;
