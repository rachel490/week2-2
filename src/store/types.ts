export interface User {
  userId?: number;
  userName: string;
  profileImage: string;
}

export interface CurrentUser extends User {
  isLoggedIn: boolean;
}
export interface ReplyUser extends User {
  replyContent: string;
}

export interface Message {
  id: number;
  date: string;
  user: User;
  content: string;
  replyUser?: ReplyUser;
}

export interface CurrentMessage {
  userName: string;
  replyContent: string;
  profileImage: string;
}

export interface Messenger {
  currentUser: CurrentUser;
  currentMessage: CurrentMessage | null;
  messages: Message[];
}
