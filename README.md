# 📗&nbsp;&nbsp;원티드 프리온보딩 4번째 과제 - 메신저 구현

<br />

## 🖥&nbsp;&nbsp;배포 주소
👉 [배포링크 바로가기](https://react18-swit-messenger.netlify.app)

<br />


## 👩&nbsp;&nbsp;팀원소개 및 담당업무
|   이가윤     |      신혜리   |     한재성    |     이선재    |
| :----------: | :----------: | :----------: | :----------: |
|<img src="https://avatars.githubusercontent.com/u/67543454?v=4" width=100 alt="_"/>| <img src="https://avatars.githubusercontent.com/u/72786354?v=4" width=100 alt="_"/> |<img src="https://avatars.githubusercontent.com/u/57760806?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/63578094?v=4" width=100 alt="_"/>|
|   Redux/모달창 세팅,<br/>메시지 삭제 확인 모달창 구현 |  메시지 입력창 구현 | 채팅창 구현 | Redux/모달창 세팅,<br/>유저네임 입력 모달창 구현 |
| [Github](https://github.com/Gayun00) |[Github](https://github.com/rachel490) |[Github](https://github.com/Han-D-Peter) |[Github](https://github.com/Sunjae95)|


<br />

## 🎮&nbsp;&nbsp;사용한 기술 스택
- typescript
- styled-component
- redux-toolkit

<br />


## 🎮&nbsp;&nbsp;구현 기능
- 유저 네임 입력 기능
    - 접속 시 대화창에서 사용할 유저 네임 입력 모달창 표시<img width="833" alt="Screen Shot 2022-02-13 at 1 03 10 AM" src="https://user-images.githubusercontent.com/72786354/153718600-8baf81eb-23f1-4d55-b669-a5038938d99d.png">

    - 입력한 유저네임으로 대화창에서 메시지 전송
- 메시지 입력기능
    - 메시지 입력 시 전송버튼 즉시 활성화
    - 엔터키로 전송
    - 멀티라인으로 메시지 입력 가능
- 대화창 메시지 표시 기능
    - 대화창 접속 시 메시지 시간 순으로 정렬
    - 메시지 전송 시 대화 목록은 항상 가장 아래로 스크롤
    - 내가 전송한 메시지 별도 표시: 이름 옆에 * 문자 출력
    - 보낸 날짜 및 시간 표시
- 답장 기능
    - 답장 버튼 클릭 시 답장할 메시지의 사용자 이름, 메시지 내용을 입력창 상단에 표시
- 삭제 기능
    - 삭제 버튼 클릭시 삭제할 메시지와 함께 '메시지를 삭제 하시겠습니까?' 출력, 응답시 삭제
    - 삭제할 메시지 내용은 최대 10자 이후 ...처리
   
<br />

|  유저네임 입력/ 대화창 메시지 표시  |  메시지 입력  |
| :------------: | :----------: |
| ![유저네임 입력](https://user-images.githubusercontent.com/67543454/153703690-4c7c17bd-6410-42bd-b57f-8bdfb765e7c0.gif)| ![메시지 입력2](https://user-images.githubusercontent.com/67543454/153703737-8c5e015a-2591-474b-8975-75316ef6cbe3.gif)|
| 메시지 답장  | 메시지 삭제   |
|![답장2](https://user-images.githubusercontent.com/67543454/153703769-6bd0a6ea-2d4b-4807-bca7-059bb8721fd7.gif)| ![삭제](https://user-images.githubusercontent.com/67543454/153703043-5ac94011-239c-46ed-879e-7f94c0afd2e1.gif) |


<br />


## 🧗‍&nbsp;&nbsp;프로젝트 과정 소개
### 진행 방식
- 개별 업무 분담
    - [한재성] 채팅창: 보낸 메시지/답장 메시지 말풍선
    - [신혜리] 메시지 입력창
    - [이선재, 이가윤] Redux 초기세팅, 공통 모달창 세팅
    - [이선재] 유저네임 입력 모달창
    - [이가윤] 메시지 삭제 확인 모달창

- 공통 진행
    - 초기세팅, 메시지 데이터 모델 정의
    - 초기세팅된 Redux의 reducer, action 정의 및 각자 맡은 영역에 적용
    - Vsc Liveshare를 활용해 페어프로그래밍 진행

 
<br />

### 협업 툴

- Figma: UI 구현
    👉 [피그마 링크](https://www.figma.com/file/IuqotpBwrkPAjMyyBHp6Ic/Untitled?node-id=0%3A1) 
- Discord, Vsc Liveshare: 실시간 소통 및 페어프로그래밍
- Swit: 칸반보드를 활용한 업무 진행상황 공유

| Swit 협업툴 | 피그마 디자인 |
| :------------: | :----------: |
|<img width="574" alt="스크린샷 2022-02-12 오후 12 28 30" src="https://user-images.githubusercontent.com/67543454/153687915-9e6bf271-4e58-4e07-82b7-9a1d68e1bd3f.png">|<img width="500" alt="Screen Shot 2022-02-13 at 1 03 31 AM" src="https://user-images.githubusercontent.com/72786354/153718645-ecaba95a-fc5d-4706-b701-05679429637d.png">|

   
<br />


### Git 커밋 컨벤션

> Option: 내용(상세 내용)
> 
- Feat - 새로운 기능 추가
- Fix - 버그 수정
- Docs - 제품 코드 수정 없음
- Style - 코드 형식, 정렬, 주석 등의 변경
- Refactor - 코드 리팩토링
- Test - 테스트 코드 추가
- Chore - 환경설정, 빌드 업무, 패키지 매니저 설정등..

<br />

### Rebase를 사용한 커밋내역 관리

- 한 브랜치에서 PR 제출 시 커밋 내역은 한 개로 관리
- 한 개의 커밋 메시지는 작업 내용을 포괄하도록 작성
<img width="574" alt="스크린샷 2022-02-12 오후 12 28 30" src="https://user-images.githubusercontent.com/67543454/153695025-9902f44a-c657-4d57-b2bc-ceae70b09033.png">

<br />

## 📘 기타 사항

### 디렉토리 구조
```jsx

├── App.tsx
├── components
│   ├── ChatList
│   │   ├── ChatBubble
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── ChatBubbleContent
│   │   ├── ChatReplyBubble   
│   │   ├── index.tsx
│   │   └── styled.ts
│   ├── ChatRoom
│   ├── InputMessage 
│   ├── InputName  
│   ├── RemoveMessageModal
│   └── shared
│       ├── Modal
│       ├── ModalPortal
│       └── index.tsx
├── index.tsx
├── react-app-env.d.ts
├── store
│   ├── messenger.ts
│   ├── store.ts
│   └── types.ts
├── styles
│   ├── defaultTheme.ts
│   ├── globalStyle.ts
│   └── styled.d.ts
└── utils
    ├── constants.ts
    ├── mockData.ts
    └── utils.ts
```

<br />


### 메시지 데이터 모델 정의
<img width="670" alt="스크린샷 2022-02-12 오후 12 32 47" src="https://user-images.githubusercontent.com/67543454/153695136-4e8df94c-264a-44d7-876d-36cede3cb28b.png">
<br />


## ⚙&nbsp;&nbsp;프로젝트 설치 및 시작

### 프로젝트 클론

> $ git clone []()


### 패키지 설치

> $ npm install

### 서버 실행

> $ npm start
