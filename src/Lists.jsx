import React, { useState } from 'react';

function Lists(props) {
  // const [modalIsOpen, onChangeModal] = useState(false);
  const [buttonName, changeButtonName] = useState('My Button');
  const { className, children, changeModal } = props;
  return (
    <div className={className}>
      <button onClick={() => {
        changeModal();
        changeButtonName('Changed button name')
      }}>
        {buttonName}
      </button>
    </div>
  );
}

export default Lists;
