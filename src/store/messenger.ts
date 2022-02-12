import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../utils/mockData';
import { CurrentMessage, Message, Messenger } from './types';

function sortTimeAccent(a: Message, b: Message) {
  const afterDate: Date = new Date(b.date);
  const beforeDate: Date = new Date(a.date);

  if (beforeDate > afterDate) {
    return 1;
  }

  return beforeDate < afterDate ? -1 : 0;
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: { ...initialState } as Messenger,
  reducers: {
    sortTime: (state) => {
      state.messages = state.messages.sort((a: Message, b: Message) => {
        return sortTimeAccent(a, b);
      });
    },
    addNewMessage: (state, action: PayloadAction<string>) => {
      const newMessage = {
        id: Date.now(),
        date: new Date().toString(),
        user: state.currentUser,
        content: action.payload,
      } as Message;
      state.messages = [...state.messages, newMessage]; // 원래로직
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload,
      );
    },
    selectedMessage: (state, action: PayloadAction<CurrentMessage | null>) => {
      state.currentMessage = action.payload;
    },
    addComment: (state, action: PayloadAction<string>) => {
      if (state.currentMessage) {
        const newMessage = {
          id: Date.now(),
          date: new Date().toString(),
          user: state.currentUser,
          content: action.payload,
          replyUser: {
            userName: state.currentMessage.userName,
            profileImage: state.currentMessage.profileImage,
            replyContent: state.currentMessage.replyContent,
          },
        };
        state.messages = [...state.messages, newMessage];
      }
    },
    addCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = {
        ...state.currentUser,
        userName: action.payload,
        isLoggedIn: true,
      };
    },
  },
});

export const {
  sortTime,
  addNewMessage,
  removeMessage,
  addComment,
  addCurrentUser,
  selectedMessage,
} = messengerSlice.actions;
export default messengerSlice.reducer;
