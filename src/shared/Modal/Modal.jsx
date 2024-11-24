import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import xClose from '../Icons/xClose.svg';

export default function Modal({ children, isOpen, onClose, btnClassName }) {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('modalIsOpen');
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.classList.remove('modalIsOpen');
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.classList.remove('modalIsOpen');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {createPortal(
        <div className={css.backdrop} onClick={onClose}>
          <div className={css.modalWrapper}>
            <div className={css.modal} onClick={e => e.stopPropagation()}>
              <button
                className={clsx(css.closeButton, btnClassName)}
                onClick={onClose}
              >
                <img src={xClose} alt="Close" className={css.closeIcon} />
              </button>
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}