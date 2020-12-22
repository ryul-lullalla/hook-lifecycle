import React, { useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const InputWithLabel = forwardRef(
  ({ type, name, placeholder, onError }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const handleFocus = () => {
      return isFocus ? null : setIsFocus(!isFocus);
    };
    const handleLabelClick = e => {
      // setIsFocus(true);
    };
    const hanldeInputBlur = e => {
      const { value } = e.target;
      if (value.length === 0) {
        if (isFocus) {
          setIsFocus(false);
        }
      }
    };
    console.log({ onError });
    return (
      <InputWithLabelContainer>
        <Input
          onFocus={handleFocus}
          onBlur={hanldeInputBlur}
          type={type}
          name={name}
          isFocus={isFocus}
          ref={ref}
          id={name}
        />
        <InputLabel htmlFor={name} onClick={handleLabelClick} isFocus={isFocus}>
          {placeholder}
        </InputLabel>
      </InputWithLabelContainer>
    );
  },
);

export default InputWithLabel;

const labelOnFocus = css`
  top: 10px;
  color: ${({ theme }) => theme.COLORS['primary-primary-3-2']};
  left: ${({ theme }) => theme.SPACING_STYLES.m};
  ${({ theme }) => theme.TEXT_STYLES.OVERLINE};
  transition: top 0.5s;
`;

const labelOutFocus = css`
  color: ${({ theme }) => theme.COLORS['gray-gray-3-2']};
  left: ${({ theme }) => theme.SPACING_STYLES.m};
  ${({ theme }) => theme.TEXT_STYLES.BODY};
`;

const InputWithLabelContainer = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.SPACING_STYLES.xl};
`;
const InputLabel = styled.label`
  position: absolute;
  top: 18px;
  transition: top 0.5s ease;

  &:hover {
    cursor: text;
  }
  ${({ isFocus }) => (isFocus ? labelOnFocus : labelOutFocus)}
`;

const Input = styled.input`
  padding: 30px ${({ theme }) => theme.SPACING_STYLES.m} 0;
  width: 284px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.COLORS['primary-primary-5-2']};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.COLORS['primary-primary-3-2']};
  }
`;
