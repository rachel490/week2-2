import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMessage } from 'store/messenger';
import * as S from './styled';

type Message = {
  message: string;
};

function RemoveMessageModal({ message }: Message) {
  const dispatch = useDispatch();
  const slicedMessage =
    message.length > 10 ? `${message.slice(0, 25)}...` : message;

  const removeMessage = () => {
    dispatch(removeMessage);
  };

  return (
    <S.Wrapper>
      <S.TextContainer>
        <S.Message>{`"${slicedMessage}"`}</S.Message>
        <p>메시지를 삭제하시겠습니까?</p>
      </S.TextContainer>
      <S.Button onClick={removeMessage}>확인</S.Button>
    </S.Wrapper>
  );
}

export default RemoveMessageModal;
