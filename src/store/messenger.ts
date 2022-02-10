import { initialState } from '../utils/mockData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 만약 다른 곳에서 쓰게 된다면 파일로 분리하기
// User의 userId uuid, string, number중 선택하기
//reply 하나의 객체 > 하위 정보 포함 or reply > boolean

interface User {
  userId:number,
  userName:string,
  profileImage:string,
}

interface CurrentUser extends User{
    isLoggedIn:boolean,
}

interface ReplyUser extends User {
    replyContent: string;
}

interface Message{
    id: number,
	date: string,
	user: User,
	content: string,
	replyUser: ReplyUser
}

interface Messenger{
    currentUser: CurrentUser,
    messages: Message[]
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {...initialState} as Messenger,
  reducers: {
    // 메시지 입력
    addNewMessage:()=>{},
    // 메시지 삭제
    removeMessage:()=>{},
    // 메시지 답글
    addComment:()=>{},
    //
  }
});

export const {addNewMessage,removeMessage,addComment} = messengerSlice.actions;
export default messengerSlice.reducer;
