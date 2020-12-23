import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoginLogo } from '@img';
import { GridContainer, Column, InputWithLabel } from '@components';
import { useForm } from 'react-hook-form';
import CheckIcon from '../../img/checkImg/ic-ic-checkbox.svg';
const Mainpage = () => {
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const { register, handleSubmit, clearErrors, getValues } = useForm();

  const hanldeSubmitButton = (data, e) => {
    setFormErrorMessage('이메일 또는 비밀번호를 다시 확인하세요.');
    console.log({ data, e });
  };

  const handleInputChange = name => {
    const allValues = getValues();
    const value = getValues(name);
    if (formErrorMessage) {
      setFormErrorMessage('');
    }
    if (!value) {
      clearErrors(name);
    }
    return isSubmitActive === detechFormValidation()
      ? null
      : setIsSubmitActive(detechFormValidation());
  };

  const detechFormValidation = () => {
    const allValues = getValues(['emailId', 'password']);
    console.log(allValues);
    let isFieldFilled = true;
    for (const property in allValues) {
      !allValues[property] && (isFieldFilled = false);
    }
    return isFieldFilled;
  };

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
          <LoginForm onSubmit={handleSubmit(hanldeSubmitButton)}>
            <LoginLogoContainer />
            {formErrorMessage && (
              <FormErrorLabel>{formErrorMessage}</FormErrorLabel>
            )}
            <InputWithLabel
              // type=""
              name="emailId"
              placeholder="이메일 계정"
              ref={register()}
              handleErrorField={handleInputChange}
            />
            <InputWithLabel
              type="password"
              name="password"
              placeholder="비밀번호"
              ref={register({
                required: false,
              })}
              handleErrorField={handleInputChange}
            />
            <LoginSubInput>
              <SaveIdInfoButtonContainer>
                <SaveIdInfoButton
                  type="checkbox"
                  name="saveIdInfo"
                  ref={register()}
                ></SaveIdInfoButton>
                <SaveIdInfoLabel>아이디 저장</SaveIdInfoLabel>
              </SaveIdInfoButtonContainer>
              <FindIdAndPwdContainer>
                <FindIdAndPwd>아이디・비밀번호 찾기</FindIdAndPwd>
              </FindIdAndPwdContainer>
            </LoginSubInput>
            <LoginFormSubmitButton
              type="submit"
              value="로그인"
              disabled={!isSubmitActive}
            />
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

const LoginLogoContainer = styled(LoginLogo)`
  margin-bottom: ${({ theme }) => theme.SPACING_STYLES.xl};
`;
const FormErrorLabel = styled.div`
  ${({ theme }) => theme.TEXT_STYLES.CAPTION};
  color: #e2361f;
  margin-bottom: ${({ theme }) => theme.SPACING_STYLES.xl};
`;

const LoginSubInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 330px;
  padding: ${({ theme }) => theme.SPACING_STYLES.xs}
    ${({ theme }) => theme.SPACING_STYLES.m}
    ${({ theme }) => theme.SPACING_STYLES.xs}
    ${({ theme }) => theme.SPACING_STYLES.s};
  margin-bottom: ${({ theme }) => theme.SPACING_STYLES.xl};
`;

const SaveIdInfoButtonContainer = styled.div`
  display: flex;
`;
const SaveIdInfoButton = styled.input`
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.COLORS['gray-gray-3-2']};
  width: 20px;
  height: 20px;
  margin: 0 ${({ theme }) => theme.SPACING_STYLES.xs} 0 0;
  &:checked {
    background-color: ${({ theme }) => theme.COLORS['primary-primary-3-2']};
    background-image: url(../../img/checkImg/ic-ic-checkbox.svg);
  }
`;
const SaveIdInfoLabel = styled.label`
  ${({ theme }) => theme.TEXT_STYLES.BUTTON2};
  color: ${({ theme }) => theme.COLORS['primary-primary-3-2']};
`;
const FindIdAndPwdContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
const FindIdAndPwd = styled.a`
  ${({ theme }) => theme.TEXT_STYLES.BUTTON2};
  color: ${({ theme }) => theme.COLORS['primary-primary-3-2']};
`;

const LoginFormSubmitButton = styled.input`
  display: flex;
  justify-content: center;
  width: 330px;
  height: 60px;
  color: ${({ theme }) => theme.COLORS['bw-white-2']};
  ${({ theme }) => theme.TEXT_STYLES.BUTTON1};
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.COLORS['gray-gray-5-2']
      : theme.COLORS['secondary-secondary-3-2']};
`;
