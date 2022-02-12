import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.mediumGrey};
`;

export const Button = styled.button`
  margin-top: 18px;
  width: 80px;
  height: 30px;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.primaryPurple};
  color: ${({ theme }) => theme.color.white};
`;
