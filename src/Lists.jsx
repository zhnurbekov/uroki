import React from 'react';

function Lists(props) {
  const { className, children, changeModal } = props;
  return (
    <div className={className}>
      <button onClick={changeModal}>
        Внутри lists изменить модалку
      </button>
      {children}
    </div>
  );
}

export default Lists;
