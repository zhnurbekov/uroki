import React, { useState } from 'react';
import App from './App';
import Page from './Page';
import './style/style..scss'

export default () => {
  const [showApp, setShowApp] = useState(true);
  return (
    <>
      <Page modal={{name:'Жайsssык', surname: 'Нурбекsssов', middlename: 'Жунсалиевич'}}/>
      <button onClick={() => setShowApp(!showApp)}>showApp</button>
      {showApp ? <App/> : null}
      </>
  )
}
