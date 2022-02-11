import React from 'react';
import img from 'assets/img/img.jpg';
import { Message } from '../mockData';
import {
  ChatBubbleContainer,
  ChatBubbleContent,
  ChatBubbleProfileBox,
  ChatBubbleProfileName,
  ChatBubbleProfileTime,
  ContentPre,
  MyChatBubble,
  ProfileImg,
  ProfileImgBox,
  YourChatBubble,
} from './styled';
import ChatReplyBuble from '../ChstReplyBubble';

interface ChatBubbleProp {
  message: Message;
  mine: boolean;
}

function ChatBubble({ message, mine }: ChatBubbleProp) {
  return (
    <ChatBubbleContainer>
      {mine ? (
        <YourChatBubble>
          {message.reply && (
            <ChatReplyBuble reply={message.reply} mine={mine} />
          )}
          <div>
            <ChatBubbleProfileBox>
              <ProfileImgBox>
                <ProfileImg src={img} alt="*" />
              </ProfileImgBox>
              <ChatBubbleProfileName>
                <span>{message.user.userName}</span>
              </ChatBubbleProfileName>
              <ChatBubbleProfileTime>
                <span>{message.date}</span>
              </ChatBubbleProfileTime>
            </ChatBubbleProfileBox>
            <ChatBubbleContent>
              <ContentPre>{message.content}</ContentPre>
            </ChatBubbleContent>
          </div>
        </YourChatBubble>
      ) : (
        <MyChatBubble>
          {message.reply && (
            <ChatReplyBuble reply={message.reply} mine={mine} />
          )}
          <div>
            <ChatBubbleProfileBox>
              <ProfileImgBox>
                <ProfileImg src={img} alt="*" />
              </ProfileImgBox>
              <ChatBubbleProfileName>
                <span>{message.user.userName}</span>
              </ChatBubbleProfileName>
              <ChatBubbleProfileTime>
                <span>{message.date}</span>
              </ChatBubbleProfileTime>
            </ChatBubbleProfileBox>
            <ChatBubbleContent>
              <ContentPre>{message.content}</ContentPre>
            </ChatBubbleContent>
          </div>
        </MyChatBubble>
      )}
      <div>
        <div>삭제</div>
        <div>댓글</div>
      </div>
    </ChatBubbleContainer>
  );
}

export default ChatBubble;
