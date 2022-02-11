import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);

  textarea {
    width: 500px;
    max-height: 200px;
    resize: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.primaryPurple};
    padding: 10px 20px 15px 20px;
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.color.whiteGrey};
  }

  button {
    display: flex;
    align-items: center;
  }

  .icon {
    position: fixed;
    bottom: 8px;
    height: 30px;
    width: 30px;
  }
`;
