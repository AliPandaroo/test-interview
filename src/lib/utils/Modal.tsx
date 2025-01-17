import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import classNames from 'classnames';

interface ModalProps {
  classes?: string;
  style?: React.CSSProperties;
  isOpen: boolean; // Indicates whether the modal is open
  onClose: () => void; // Function to close the modal
  children: React.ReactNode; // Content to be displayed inside the modal
}

const Modal: React.FC<ModalProps> = ({
  classes,
  style,
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close modal if clicked outside
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        ref={modalRef}
        className={classNames(
          'w-[95%] max-w-[365px]',
          'flex flex-col items-center justify-center',
          'bg-gray-50 p-4 hover:bg-gray-100',
          'relative w-full max-w-lg rounded-lg',
          'border-[.2px] border-gray-100',
          classes
        )}
      >
        <button
          onClick={onClose}
          className='absolute right-[0px] top-[-4px] flex size-8 cursor-pointer items-center justify-center text-center align-middle text-gray-600 hover:text-gray-800'
        >
          <Icon
            className='size-5 cursor-pointer text-red-500 *:cursor-pointer hover:text-red-600'
            icon='material-symbols:close-rounded'
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
