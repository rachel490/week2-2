import ChatList from 'components/ChatList';
import { mockData } from 'components/ChatList/mockData';
import React from 'react';

function App() {
  return (
    <div>
      <ChatList messages={mockData} />
    </div>
  );
}

export default App;
