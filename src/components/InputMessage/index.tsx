import React, { useEffect, useRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addNewMessage } from 'store/messenger';
import theme from 'styles/defaultTheme';
import * as S from './styled';


function Input() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    setMessage('');
    dispatch(addNewMessage(message));
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
      <textarea
        placeholder="메세지를 입력해주세요"
        onKeyDown={onEnterPress}
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
    </S.Form>
  );
}
export default Input;
