import React from 'react';
import ChatBubble from './ChatBubble';
import { Message } from './mockData';

interface ChatListProp {
  messages: Message[];
}

function ChatList({ messages }: ChatListProp) {
  return (
    <div>
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} mine />
      ))}
    </div>
  );
}

export default ChatList;
