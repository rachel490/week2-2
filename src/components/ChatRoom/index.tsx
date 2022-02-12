import React, { useState } from 'react';
import InputName from 'components/InputName';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ChatList from 'components/ChatList';
import InputMessage from 'components/InputMessage';
import ModalPortal from 'components/shared/ModalPortal';
import Modal from 'components/shared/Modal';
import * as S from './styled';

function ChatRoom() {
  const [scroll, setScroll] = useState(0);
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.messenger.currentUser,
  );

  return (
    <S.Container>
      {!isLoggedIn ? (
        <ModalPortal>
          <Modal>
            <InputName />
          </Modal>
        </ModalPortal>
      ) : (
        <S.Wrap>
          <S.ChatListWrap scroll={scroll}>
            <ChatList scroll={scroll} />
          </S.ChatListWrap>
          <S.InputMessageWrap>
            <InputMessage setScroll={setScroll} />
          </S.InputMessageWrap>
        </S.Wrap>
      )}
    </S.Container>
  );
}

export default ChatRoom;
