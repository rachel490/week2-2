import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  bottom: 50px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  .deleteBtn {
    display: flex;
    align-items: flex-start;
    padding-top: 3px;
  }

  textarea {
    width: 580px;
    max-height: 200px;
    resize: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.primaryPurple};
    padding: 10px 20px 15px 20px;
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.color.whiteGrey};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    display: flex;
    align-items: center;
  }

  .icon {
    position: fixed;
    bottom: 51px;
    height: 30px;
    width: 30px;
  }
`;

export const ReplyWrap = styled.div`
  width: 580px;
`;
