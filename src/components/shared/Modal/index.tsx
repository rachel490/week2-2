import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { ModalProps } from './types';
import * as Styled from './styled';

function Modal({ children, onClose }: ModalProps) {
  return (
    <Styled.Background>
      <Styled.ModalContainer>
        <Styled.CloseButton>
          <IoMdClose onClick={onClose} />
        </Styled.CloseButton>
        {children}
      </Styled.ModalContainer>
    </Styled.Background>
  );
}

export default Modal;
