import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.dimmGray};
  filter: ${({ theme }) => theme.shadow};
`;

export const CloseButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  height: 150px;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.whiteGrey};

  & > svg {
    cursor: pointer;
  }
`;
