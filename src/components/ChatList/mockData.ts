interface User {
  userId: number;
  userName: string;
  profileImage: string;
}

interface Reply extends User {
  replyContent: string;
}

export interface Message {
  id: number;
  date: string;
  user: User;
  content: string;
  reply?: Reply;
}

export const mockData: Message[] = [
  {
    id: 1781497,
    date: '2000-07-07 15:00:00',
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
    date: '2000-07-07 15:01:00',
    user: {
      userId: 2,
      userName: 'paul',
      profileImage: 'assets/img/img2.jpg',
    },
    content: "Ipsum as their default model text, and a search for 'lorem ipsu",
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
    date: '2000-07-07 15:02:00',
    user: {
      userId: 1,
      userName: 'ellith',
      profileImage: 'assets/img/img3.jpg',
    },
    content: "for 'lorem ipsum' will uncover",
  },
  {
    id: 1781496,
    date: '2000-07-07 15:03:30',
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
    date: '2000-07-07 15:04:00',
    user: {
      userId: 2,
      userName: 'Paul',
      profileImage: 'assets/img/img2.jpg',
    },
    content: 'software like Aldus PageMaker',
  },
];
