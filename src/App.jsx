import React from 'react';
import Lists from './Lists';


class App extends React.Component {

  state = {
    modalIsOpen: false
  };

  render() {
    const { modalIsOpen } = this.state;
    const toTest = message => ({message});
    return (
      <div>
        <button onClick={() => this.setState({modalIsOpen: !modalIsOpen})}>Изменить состояние модалки</button>
        <Lists className="test" changeModal={() => {
          let rrr = toTest('from render');
          console.log(rrr)
          this.setState({modalIsOpen: !modalIsOpen})
        }}>
          {modalIsOpen ? 'модалка открыта' : 'модалка закрыта'}<br/>
        </Lists>
      </div>
    );
  }
}


export default App;

