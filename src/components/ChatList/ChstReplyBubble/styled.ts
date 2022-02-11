import styled from 'styled-components';

export const ReplyBubbleBox = styled.div`
  background-color: ${({ theme }) => theme.color.lightPurple};
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  box-shadow: 0px 0px 7px 3px #5b4693 inset;
  border-style: inset;
  color: ${({ theme }) => theme.color.white};
  padding: 13px 18px 13px 18px;
  margin-bottom: 10px;
  width: 100%;
`;

export const YourReplyBubble = styled.div`
  background-color: ${({ theme }) => theme.color.mediumGrey};
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  box-shadow: 0px 0px 4px 3px #22222d inset;
  border-style: inset;
  color: ${({ theme }) => theme.color.white};
  padding: 13px 18px 13px 18px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ReplyBubbleProfileBox = styled.div`
  display: flex;
  align-items: end;
`;

export const ReplyProfileImgBox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReplyBubbleProfileName = styled.div`
  margin: 0px 5px 0px 5px;
`;

export const ReplyBubbleContent = styled.div`
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 9px;
`;
