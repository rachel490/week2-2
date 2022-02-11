import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ChatBubble from './ChatBubble';

function ChatList() {
  const messages = useSelector((state: RootState) => state.messenger.messages);

  return (
    <div>
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} mine />
      ))}
    </div>
  );
}

export default ChatList;
