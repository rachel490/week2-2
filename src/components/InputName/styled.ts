import styled, { css } from 'styled-components';

export const InputNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const ExplainText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const NameInputForm = styled.form`
  display: flex;
  margin-top: 31px;
  width: 198px;
  height: 23px;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.color.white};
  `}
`;

export const NameInput = styled.input`
  width: 152px;
  padding: 6px 6px 6px 13px;
  outline: none;
  border: none;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.color.white};
    font-size: ${theme.fontSize.xsmall};

    &: placeholder {
      color: ${theme.color.whiteGrey};
    }
  `}
`;

export const Button = styled.button`
  width: 46px;
  height: 23px;

  ${({ theme }) => css`
    background-color: ${theme.color.primaryPurple};
    color: ${theme.color.white};
    font-size: ${theme.fontSize.xsmall};
    border-radius: ${theme.border.radius};
  `}
`;
