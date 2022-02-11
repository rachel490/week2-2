export const initialState = {
  currentUser: {
    isLoggedIn: true,
    userId: 1,
    userName: 'peter',
    profileImage: '',
  },
  currentMessage: null,
  messages: [
    {
      id: 1781497,
      date: 'Sat Feb 12 2022 00:01:59 GMT+0900 (한국 표준시)',
      user: {
        userId: 1,
        userName: 'peter',
        profileImage: 'assets/img/img.jpg',
      },
      content:
        'hello! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce',
    },
    {
      id: 1781498,
      date: 'Sat Feb 12 2022 00:02:59 GMT+0900 (한국 표준시)',
      user: {
        userId: 2,
        userName: 'paul',
        profileImage: 'assets/img/img2.jpg',
      },
      content:
        "Ipsum as their default model text, and a search for 'lorem ipsu",
      reply: {
        userId: 2,
        userName: 'peter',
        profileImage: 'assets/img/img.jpg',
        replyContent:
          'hello! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce',
      },
    },
    {
      id: 1783022,
      date: 'Sat Feb 12 2022 00:03:59 GMT+0900 (한국 표준시)',
      user: {
        userId: 1,
        userName: 'ellith',
        profileImage: 'assets/img/img3.jpg',
      },
      content: "for 'lorem ipsum' will uncover",
    },
    {
      id: 1781496,
      date: 'Sat Feb 12 2022 00:04:59 GMT+0900 (한국 표준시)',
      user: {
        userId: 3,
        userName: 'peter',
        profileImage: 'assets/img/img.jpg',
      },
      content:
        "it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      reply: {
        userId: 2,
        userName: 'ellith',
        profileImage: 'assets/img/img3.jpg',
        replyContent:
          'hello! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce',
      },
    },
    {
      id: 1781466,
      date: 'Sat Feb 12 2022 00:05:59 GMT+0900 (한국 표준시)',
      user: {
        userId: 2,
        userName: 'Paul',
        profileImage: 'assets/img/img2.jpg',
      },
      content: 'software like Aldus PageMaker',
    },
  ],
};
