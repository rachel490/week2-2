import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ChatBubble from './ChatBubble';
import * as S from './styled';

function ChatList() {
  const messages = useSelector((state: RootState) => state.messenger.messages);
  const currentUser = useSelector(
    (state: RootState) => state.messenger.currentUser,
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  function isMe(targetName: string) {
    return currentUser.userName === targetName;
  }

  const scrollToBottom = useCallback(() => {
    if (messages) {
      scrollRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <S.ChatListView ref={scrollRef}>
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message}
          mine={isMe(message.user.userName)}
        />
      ))}
    </S.ChatListView>
  );
}

export default ChatList;
