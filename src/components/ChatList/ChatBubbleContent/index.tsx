import React from 'react';
import { getImgFromPublic } from 'utils/utils';
import ChatReplyBuble from '../ChstReplyBubble';
import { Message } from '../mockData';
import {
  ChatBubbleContentStyled,
  ChatBubbleProfileBox,
  ChatBubbleProfileName,
  ChatBubbleProfileTime,
  ContentPre,
  ProfileImg,
  ProfileImgBox,
} from './styled';

interface ChatBubbleContentProp {
  message: Message;
  mine: boolean;
}

function ChatBubbleContent({ message, mine }: ChatBubbleContentProp) {
  return (
    <div>
      {message.reply && <ChatReplyBuble reply={message.reply} mine={mine} />}
      <div>
        <ChatBubbleProfileBox>
          <ProfileImgBox>
            <ProfileImg
              src={getImgFromPublic(message.user.profileImage)}
              alt="*"
            />
          </ProfileImgBox>
          <ChatBubbleProfileName>
            <span>{message.user.userName}</span>
          </ChatBubbleProfileName>
          <ChatBubbleProfileTime>
            <span>{message.date}</span>
          </ChatBubbleProfileTime>
        </ChatBubbleProfileBox>
        <ChatBubbleContentStyled>
          <ContentPre>{message.content}</ContentPre>
        </ChatBubbleContentStyled>
      </div>
    </div>
  );
}

export default ChatBubbleContent;
