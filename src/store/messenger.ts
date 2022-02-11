/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { initialState } from '../utils/mockData';
// 만약 다른 곳에서 쓰게 된다면 파일로 분리하기
// User의 userId uuid, string, number중 선택하기
//  reply 하나의 객체 > 하위 정보 포함 or reply > boolean

interface User {
  userId: number;
  userName: string;
  profileImage: string;
}

interface CurrentUser extends User {
  isLoggedIn: boolean;
}
interface ReplyUser extends User {
  replyContent: string;
}

interface Message {
  id: number;
  date: string;
  user: User;
  content: string;
  replyUser?: ReplyUser;
}

interface CurrentMessage {
  userName: string;
  replyContent: string;
  profileImage: string;
}

interface Messenger {
  currentUser: CurrentUser;
  currentMessage: CurrentMessage | null;
  messages: Message[];
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: { ...initialState } as Messenger,
  reducers: {
    // 메시지 입력
    addNewMessage: (state, action: PayloadAction<string>) => {
      if (!state.currentMessage) {
        const newMessage = {
          id: Date.now(),
          date: new Date().toString(),
          user: state.currentUser,
          content: action.payload,
        } as Message;
        state.messages = [...state.messages, newMessage]; // 원래로직
        return state;
      }
    },
    // 메시지 삭제
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload,
      );
    },
    // 메세지 답글 요청
    selectedMessage: (state, action: PayloadAction<CurrentMessage | null>) => {
      state.currentMessage = action.payload;
    },

    // 메시지 답글
    addComment: (state, action: PayloadAction<string>) => {
      const newMessage = {
        id: Date.now(),
        date: new Date().toString(),
        user: state.currentUser,
        content: action.payload,
        reply: {
          userName: state.currentMessage?.userName,
          profileImage: state.currentMessage?.profileImage,
          replyContent: state.currentMessage?.replyContent,
        },
      };
      state.messages = [...state.messages, newMessage];
    },
    // 유저 추가
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
  addNewMessage,
  removeMessage,
  addComment,
  addCurrentUser,
  selectedMessage,
} = messengerSlice.actions;
export default messengerSlice.reducer;
