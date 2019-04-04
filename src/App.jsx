import React from 'react';
import Lists from './Lists';

class App extends React.Component {
  state = {
    modalIsOpen: false
  };

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount(prevProps, prevState) {
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate(prevProps) {
    console.log('shouldComponentUpdate')
    return true
  }

  render() {
    const { modalIsOpen } = this.state;
    const onChangeModal = () => this.setState({ modalIsOpen: !modalIsOpen });
    console.log('render');

    return (
      <div>
        {modalIsOpen ? 'модалка открыта' : 'модалка закрыта'} <br />
        <Lists className="test" changeModal={onChangeModal} />
      </div>
    );
  }
}

export default App;
