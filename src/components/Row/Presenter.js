// React
import React from 'react';

// styled-components
import styled from 'styled-components';

// constants
import { BREAK_POINT_DEVICE } from '@constants';

const { mobile, tablet, desktop } = BREAK_POINT_DEVICE;

const Presenter = props => {
  // variables props
  const { children } = props;

  return <Row>{children}</Row>;
};

const Row = styled.div`
  display: grid;

  @media ${mobile} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${tablet} {
    grid-template-columns: repeat(8, 1fr);
    column-gap: 24px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${desktop} {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 24px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Presenter;
