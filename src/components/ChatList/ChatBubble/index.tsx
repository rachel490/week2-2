/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { BsReply } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import ModalPotal from 'components/shared/ModalPortal';
import Modal from 'components/shared/Modal';
import RemoveMessageModal from 'components/RemoveMessageModal';
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
  const [isOpened, setIsOpened] = useState(false);

  function onRemoveClick() {
    setIsOpened(!isOpened);
  }

  function onReplyClick(messageId: number) {
    console.log(messageId, 'add comment');
  }

  return (
    <ChatBubbleContainer>
      {isOpened && (
        <ModalPotal>
          <Modal onClose={onRemoveClick}>
            <RemoveMessageModal
              messageId={message.id}
              message={message.content}
            />
          </Modal>
        </ModalPotal>
      )}
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
          <UtilBoxDelBtn onClick={onRemoveClick}>
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
