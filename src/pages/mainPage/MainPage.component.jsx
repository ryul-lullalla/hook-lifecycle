import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Column, GridContainer } from '@components';

const Mainpage = () => {
  useEffect(() => {
    return () => {
      console.log('unMount customHook in MainPage');
    };
  }, []);
  return (
    <GridContainer col="12">
      <Column col="4">
        <SubTitle>Almost before we knew it, we had left the ground.</SubTitle>
        <MainHeader>
          Almost before we knew it, we had left the ground.
        </MainHeader>
      </Column>
      <Column col="8">
        <MainSubTitle>
          Almost before we knew it, we had left the ground.
        </MainSubTitle>
      </Column>
    </GridContainer>
  );
};

export default Mainpage;

const MainHeader = styled.div`
  /* font-family: 'Noto Sans KR', sans-serif; */
  font-weight: 100;
  ${props => props.theme.TEXT_STYLES.H5}
`;
const MainSubTitle = styled.div`
  /* font-family: 'Noto Sans KR', sans-serif; */
  ${props => props.theme.TEXT_STYLES.H4}
  color: ${props => props.theme.COLORS['blue-blue-2-2']};
  padding: ${props => props.theme.SPACING_STYLES.xl} 0;
`;

const SubTitle = styled.div`
  /* font-family: 'Noto Sans KR', sans-serif; */
  /* font-weight: 400; */
  font-weight: normal;
  line-height: 1.53;
  letter-spacing: 0.3px;
`;
const MainPageContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
