import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { BREAK_POINT_DEVICE } from '@constants';
import { Header } from '@components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from '@pages';
import LoginPage from '@pages/loginPage/LoginPage.component';
import useDeviceWidth from '@hooks/useDeviceWidth';

const { desktop, tablet, mobile } = BREAK_POINT_DEVICE;

const Routes = () => {
  const currentDevice = useSelector(state => state.deviceStore.device);

  const [width] = useDeviceWidth(currentDevice);

  return (
    <>
      <Router>
        <Header />
        <AppContainer currentWidth={width}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </AppContainer>
      </Router>
    </>
  );
};

export default Routes;

const GridStyleGuide = css`
  @media ${desktop} {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 24px;
    padding: 0 ${props => props.currentWidth}px;
  }
`;
const AppContainer = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.COLORS['gray-gray-7-2']};
  @media ${mobile} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;
    padding: 0 16px;
  }

  @media ${tablet} {
    grid-template-columns: repeat(8, 1fr);
    column-gap: 24px;
    padding: 0 24px;
  }

  ${GridStyleGuide}
`;
