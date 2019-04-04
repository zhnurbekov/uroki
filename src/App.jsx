import React from 'react';
import Lists from './Lists';

class App extends React.Component {
  state = {
    modalIsOpen: false,
    users:[]
  };

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data =>{
        this.setState({users : data});
        console.log(this.state)

      });

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
        <Lists className="test" changeModal={onChangeModal} userList = {this.state.users}/>
      </div>
    );
  }
}

export default App;
