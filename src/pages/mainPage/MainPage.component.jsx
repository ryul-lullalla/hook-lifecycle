import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoginLogo } from '@img';
import { GridContainer, Column, InputWithLabel } from '@components';
import { useForm } from 'react-hook-form';

const Mainpage = () => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {},
    criteriaMode: 'all',
  });
  const onSubmit = (data, e) => {
    console.log({ data, e });
  };
  const onError = (error, e) => {
    console.log({ error, e });
  };
  console.log({ errors });
  return (
    <LoginFormGridContainer inherit col="12">
      <Column col="span 4">
        <SubTitle>Almost before we knew it, we had left the ground.</SubTitle>
        <MainHeader>
          Almost before we knew it, we had left the ground.
        </MainHeader>
      </Column>
      <GridContainer col="8">
        <LoginFormContainer col="2 / 8">
          <LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
            <LoginLogo />
            <InputWithLabel
              type="email"
              name="emailId"
              placeholder="이메일 계정"
              ref={register({
                required: '이메일을 입력해 주세요.',
                // pattern: {
                //   value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                //   message: '대문자 소문자 조합 ㄱㄱ',
                // },
              })}
              onError={errors.emailId}
            />
            <InputWithLabel
              type="password"
              name="password"
              placeholder="비밀번호"
              ref={register({
                required: '비밀번호를 입력해 주세요.',
                // pattern: {
                //   value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                //   message: '비밀번호 조합 ㄱㄱ',
                // },
              })}
            />
            <input type="submit" />
          </LoginForm>
        </LoginFormContainer>
      </GridContainer>
    </LoginFormGridContainer>
  );
};

export default Mainpage;

const MainHeader = styled.div`
  font-weight: 100;
  ${props => props.theme.TEXT_STYLES.H5}
`;
const LoginFormContainer = styled(Column)`
  ${props => props.theme.TEXT_STYLES.H5};
  padding: ${props => props.theme.SPACING_STYLES.xxxl} 0;
`;

const SubTitle = styled.div`
  font-weight: normal;
  line-height: 1.53;
  letter-spacing: 0.3px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginFormGridContainer = styled(GridContainer)`
  background-color: ${({ theme }) => theme.COLORS['gray-gray-7-2']};
`;
