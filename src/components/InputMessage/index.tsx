import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, addNewMessage, selectedMessage } from 'store/messenger';
import { RootState } from 'store/store';
import { IoIosSend } from 'react-icons/io';
import { TiDeleteOutline } from 'react-icons/ti';
import theme from 'styles/defaultTheme';
import ChatReplyBuble from 'components/ChatList/ChatReplyBubble';
import * as S from './styled';

function InputMessage() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const currentMessage = useSelector(
    (state: RootState) => state.messenger.currentMessage,
  );

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (!message) {
      return;
    }
    setMessage('');
    if (currentMessage) {
      dispatch(addComment(message));
      dispatch(selectedMessage(null));
    } else {
      dispatch(addNewMessage(message));
    }
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      if (message) {
        handleSubmit();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let contents = e.currentTarget.value;
    contents = contents.replaceAll('<br>', '\r\n');
    setMessage(contents);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <S.Form onSubmit={handleSubmit}>
      {currentMessage && (
        <S.Container>
          <ChatReplyBuble reply={currentMessage} mine />
          <button
            className="deleteBtn"
            type="button"
            onClick={() => dispatch(selectedMessage(null))}
          >
            <TiDeleteOutline size={20} color="red" />
          </button>
        </S.Container>
      )}
      <S.Container>
        <textarea
          placeholder="메세지를 입력해주세요"
          onKeyPress={onEnterPress}
          onChange={handleChange}
          value={message}
          ref={textareaRef}
        />
        <button type="submit">
          <IoIosSend
            className="icon"
            color={
              message.length > 0
                ? theme.color.primaryPurple
                : theme.color.darkGrey
            }
          />
        </button>
      </S.Container>
    </S.Form>
  );
}
export default InputMessage;
