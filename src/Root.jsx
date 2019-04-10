import React, { useState } from 'react';
import App from './App';
import Page from './Page';

export default () => {
  const [showApp, setShowApp] = useState(true);
  return (
    <>
      <Page/>
      <button onClick={() => setShowApp(!showApp)}>showApp</button>
      {showApp ? <App/> : null}
      </>
  )
}
