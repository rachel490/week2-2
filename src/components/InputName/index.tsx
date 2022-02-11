import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentUser } from 'store/messenger';
import * as Styled from './styled';

function InputName() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCurrentUser(inputValue));
  };

  return (
    <Styled.InputNameContainer>
      <Styled.ExplainText>이름을 입력해주세요.</Styled.ExplainText>
      <Styled.NameInputForm onSubmit={handleSubmit}>
        <Styled.NameInput
          value={inputValue}
          placeholder="한글자 이상 입력해주세요"
          onChange={handleChange}
        />
        <Styled.Button onClick={handleSubmit}>확인</Styled.Button>
      </Styled.NameInputForm>
    </Styled.InputNameContainer>
  );
}
export default InputName;
