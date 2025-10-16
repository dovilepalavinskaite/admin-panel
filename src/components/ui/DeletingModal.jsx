import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import './DeletingModal.css';

const DeletingModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <form method="dialog" className="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.body
  );
});

export default DeletingModal;