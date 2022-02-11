import React from 'react';
import InputName from 'components/InputName';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import ModalPortal from './components/shared/ModalPortal';
import Modal from './components/shared/Modal';

function App() {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.messenger.currentUser,
  );

  return (
    <div>
      {!isLoggedIn && (
        <ModalPortal>
          <Modal>
            <InputName />
          </Modal>
        </ModalPortal>
      )}
    </div>
  );
}

export default App;
