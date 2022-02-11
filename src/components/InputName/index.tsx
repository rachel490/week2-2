import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentUser } from 'store/messenger';
import * as S from './styled';

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
    <S.InputNameContainer>
      <S.ExplainText>이름을 입력해주세요.</S.ExplainText>
      <S.NameInputForm onSubmit={handleSubmit}>
        <S.NameInput
          value={inputValue}
          placeholder="한글자 이상 입력해주세요"
          onChange={handleChange}
        />
        <S.Button onClick={handleSubmit}>확인</S.Button>
      </S.NameInputForm>
    </S.InputNameContainer>
  );
}
export default InputName;
