import styled from 'styled-components';

export const ChatBubbleContainer = styled.div`
  margin: 10px 0px 10px 0px;
  display: flex;
`;

export const MyChatBubbleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const YourChatBubbleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const MyChatBubble = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.color.primaryPurple};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 5px 13px 5px;
`;

export const YourChatBubble = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 5px 13px 5px;
`;

export const ChatBubbleUtilBox = styled.div`
  display: block;
  width: 40px;
  margin-top: 10px;
`;

export const UtilBoxDelBtn = styled.button`
  display: none;
  ${ChatBubbleContainer}:hover & {
    display: block;
  }
`;

export const UtilBoxReplyBtn = styled.button`
  display: none;
  ${ChatBubbleContainer}:hover & {
    display: block;
  }
`;
