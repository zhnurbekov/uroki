import React from 'react';
import withModal from './withModal';
import { Modal } from '@material-ui/core'

function Page({ modal }) {
  return <div>Page
    <button onClick={() => modal.onOpen({name:'Жайык', surname: 'Нурбеков', middlename: 'Жунсалиевич'})}>onOpen</button>
    <Modal open={modal.open} onClose={modal.onClose}>
      <div style={{backgroundColor: 'white'}}>
        <h5>{modal.data.name}</h5>
        <h5>{modal.data.surname}</h5>
        <h5>{modal.data.middlename}</h5>
      </div>
    </Modal>
  </div>;
}

export default withModal(Page);
