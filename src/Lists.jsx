import React, { useState } from 'react';

function Lists(props) {
  // const [modalIsOpen, onChangeModal] = useState(false);
  const [buttonName, changeButtonName] = useState('My Button');
  const { className, changeModal, userList } = props;
  const listItems = userList.map((user) =>
    <li key={user.id}>{user.first_name + ' ' + user.last_name}</li>
  );


  return (
    <div className={className}>
      <button onClick={() => {
        changeModal();
        changeButtonName('Changed button name');
      }}>
        {buttonName}
      </button>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Lists;
