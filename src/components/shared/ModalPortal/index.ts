import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalPotalProps } from './types.js';

// 모달창 -> style
const Modal = ({ children }: ModalPotalProps) => {
  const modalEl: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modalEl);
    return () => {
      document.body.removeChild(modalEl);
    };
  }, []);

  return ReactDOM.createPortal(children, modalEl);
};

export default Modal;
