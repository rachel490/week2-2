import styled from 'styled-components';

export const ChatListWrap = styled.div<{ scroll: number }>`
  width: 600px;
  overflow-y: scroll;
  height: calc(80vh - ${({ scroll }) => (scroll < 200 ? scroll : 200)}px);
  position: absolute;
  top: 0;
`;

export const InputMessageWrap = styled.div`
  width: 600px;
  height: 10vh;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
`;
