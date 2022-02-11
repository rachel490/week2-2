import React from 'react';
import { BsReply } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { Message } from '../mockData';
import {
  ChatBubbleContainer,
  ChatBubbleUtilBox,
  MyChatBubble,
  UtilBoxDelBtn,
  UtilBoxReplyBtn,
  YourChatBubble,
} from './styled';
import ChatBubbleContent from '../ChatBubbleContent';

interface ChatBubbleProp {
  message: Message;
  mine: boolean;
}

function ChatBubble({ message, mine }: ChatBubbleProp) {
  function onRemoveClick(messageId: number) {
    console.log(messageId, 'is removed');
  }

  function onReplyClick(messageId: number) {
    console.log(messageId, 'add comment');
  }

  return (
    <ChatBubbleContainer>
      {mine ? (
        <MyChatBubble>
          <ChatBubbleContent message={message} mine={mine} />
        </MyChatBubble>
      ) : (
        <YourChatBubble>
          <ChatBubbleContent message={message} mine={mine} />
        </YourChatBubble>
      )}

      <ChatBubbleUtilBox>
        {mine && (
          <UtilBoxDelBtn onClick={() => onRemoveClick(message.id)}>
            <TiDeleteOutline color="red" />
          </UtilBoxDelBtn>
        )}
        <UtilBoxReplyBtn onClick={() => onReplyClick(message.id)}>
          <BsReply />
        </UtilBoxReplyBtn>
      </ChatBubbleUtilBox>
    </ChatBubbleContainer>
  );
}

export default ChatBubble;
