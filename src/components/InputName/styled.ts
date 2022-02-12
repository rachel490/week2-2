import styled, { css } from 'styled-components';

export const InputNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ExplainText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const NameInputForm = styled.form`
  display: flex;
  margin-top: 31px;
  width: 250px;
  height: 30px;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.color.white};
  `}
`;

export const NameInput = styled.input`
  width: 190px;
  height: 30px;
  padding: 9px 6px 9px 13px;
  outline: none;
  border: none;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.color.white};
    font-size: ${theme.fontSize.small};

    &: placeholder {
      color: ${theme.color.whiteGrey};
    }
  `}
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;

  ${({ theme }) => css`
    background-color: ${theme.color.primaryPurple};
    color: ${theme.color.white};
    font-size: ${theme.fontSize.small};
    border-radius: ${theme.border.radius};
  `}
`;
