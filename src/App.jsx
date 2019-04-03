import React from 'react';
import Lists from './Lists';

class App extends React.Component {
  state = {
    modalIsOpen: false
  };

  render() {
    const { modalIsOpen } = this.state;
    const onChangeModal = () => this.setState({ modalIsOpen: !modalIsOpen });

    return (
      <div>
        <Lists className="test" changeModal={onChangeModal}>
          {modalIsOpen ? 'модалка открыта' : 'модалка закрыта'}
          <br />
        </Lists>
      </div>
    );
  }
}

export default App;
