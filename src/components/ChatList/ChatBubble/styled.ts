import styled from 'styled-components';

export const ChatBubbleContainer = styled.div`
  margin: 30px 0px 30px 0px;
  display: flex;
`;

export const MyChatBubble = styled.div`
  background-color: ${({ theme }) => theme.color.mainPurple};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 5px 13px 5px;
  width: 100%;
`;

export const YourChatBubble = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 5px 13px 5px;
  width: 100%;
`;

export const ChatBubbleUtilBox = styled.div`
  display: none;
  margin-top: 10px;
  ${ChatBubbleContainer}:hover & {
    display: block;
  }
`;

export const UtilBoxDelBtn = styled.button``;

export const UtilBoxReplyBtn = styled.button``;
