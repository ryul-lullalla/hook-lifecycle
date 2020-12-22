import React from 'react';
import { useHistory } from 'react-router-dom';

import { Column } from '@components';
import GridContainer from '../GridContainer/Presenter';
import styled from 'styled-components';

const Presenter = () => {
  const history = useHistory();
  const handleClick = e => {
    return true;
    console.log('unMount', history);
    history.push('/counter');
  };

  return (
    <HeaderContainer col="12">
      <Column col="2">
        <div>Almost before we knew it, we had left the ground.</div>
      </Column>
      <Column col="5">
        <button type="button" onSubmit={handleClick}>
          로그인
        </button>
        <button type="button">회원가입</button>
      </Column>
    </HeaderContainer>
  );
};

export default Presenter;

const HeaderContainer = styled(GridContainer)`
  display: grid;
  height: 88px;
  background-color: ${({ theme }) => theme.COLORS['bw-white-2']};
`;

// const HeaderButton = styled(CustomButton)`
//   background-color: blue;
//   font-size: 50px;
// `;
// const HeaderButton = styled(CustomButton)`
// `;
