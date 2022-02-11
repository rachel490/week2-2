import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ChatBubble from './ChatBubble';
import { ChatListView } from './styled';

function ChatList() {
  const messages = useSelector((state: RootState) => state.messenger.messages);
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <ChatListView ref={scrollRef}>
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} mine />
      ))}
    </ChatListView>
  );
}

export default ChatList;
