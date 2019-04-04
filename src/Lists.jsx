import React, { useState } from 'react';

function Lists(props) {
  // const [modalIsOpen, onChangeModal] = useState(false);
  const [buttonName, changeButtonName] = useState('My Button');
  const { className, changeModal , userList } = props;
  const users = userList.map((user) =>
  return (
    <div className={className}>
      <ul>
       {users}
      </ul>
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
