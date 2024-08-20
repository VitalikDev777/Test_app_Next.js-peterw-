'use client';

import React, {memo} from 'react';

interface ModalProps {
  children: React.ReactNode;
  closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className='absolute w-full h-full bg-black bg-opacity-50 z-[-1]' onClick={closeModal}/>
      {children}
    </div>
  );
};

export default memo(Modal);
