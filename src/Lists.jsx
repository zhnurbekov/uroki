import React from 'react';

function Lists(props) {
  console.log(props)
  return (
    <div className={props.className}>
      Lists
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Lists;
