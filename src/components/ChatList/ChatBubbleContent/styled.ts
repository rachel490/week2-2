import styled from 'styled-components';

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
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px 5px 0px 5px;
`;

export const ChatBubbleProfileTime = styled.div`
  margin-left: 3px;
  margin-bottom: 0.5px;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.whiteGrey};
`;

export const ChatBubbleContentStyled = styled.div`
  width: 96%;
  margin-left: 17px;
  padding-right: 14px;
  margin-top: 9px;
`;

export const ContentPre = styled.div`
  overflow: auto;
  overflow-y: hidden;
  white-space: pre-wrap;
  word-break: break-all;
`;
