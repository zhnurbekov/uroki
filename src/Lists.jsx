import React, { useState } from 'react';

function Lists(props) {
  const [modalIsOpen, onChangeModal] = useState(false);
  const [buttonName, changeButtonName] = useState('My Button');
  const { className, children } = props;
  return (
    <div className={className}>
      <button onClick={() => {
        onChangeModal(!modalIsOpen);
        changeButtonName('Chnged button name')
      }}>
        {buttonName}
      </button>
      {modalIsOpen ? 'Модалка открыта' : 'Модалка закрыта'}
    </div>
  );
}

export default Lists;
