import React, { useState } from 'react';
import App from './App';

export default () => {
  const [showApp, setShowApp] = useState(true);
  return (
    <>
      <button onClick={() => setShowApp(!showApp)}>showApp</button>
      {showApp ? <App/> : null}
      </>
  )
}
