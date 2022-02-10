export const initialState = {
  currentUser: {
    isLoggedIn: false,
    userId: 1,
    userName: "",
    profileImage: "",
  },
  messages: [
    {
      id: 1781497,
      date: "",
      user: {
        userId: 1,
        userName: "",
        profileImage: ""
      },
      content: "",
      replyUser:{
        userId: 2,
        userName: "",
        profileImage: "",
        replyContent: ""
      }
    }
  ]
}
