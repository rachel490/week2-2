import styled from 'styled-components';

export const ChatBubbleContainer = styled.div`
  margin: 30px 0px 30px 0px;
  display: flex;
`;

export const MyChatBubble = styled.div`
  background-color: ${({ theme }) => theme.color.primaryPurple};
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

export const ChatBubbleProfileBox = styled.div`
  display: flex;
  align-items: end;
  margin-left: 8px;
  margin-right: 8px;
`;

export const ProfileImgBox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ChatBubbleProfileName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0px 5px 0px 5px;
`;

export const ChatBubbleProfileTime = styled.div`
  margin-left: 3px;
  margin-bottom: 0.5px;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.whiteGrey};
`;

export const ChatBubbleContent = styled.div`
  width: 96%;
  margin-left: 17px;
  margin-right: 17px;
  margin-top: 9px;
`;

export const ContentPre = styled.div`
  overflow: auto;
  overflow-y: hidden;
  white-space: pre-wrap;
`;
