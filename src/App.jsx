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
    fetch('https://jsonplaceholder.typicode.com/users')
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
    const removeUser = (removeUser) =>  this.setState({users: this.state.users.filter(function(user) {
        return user.id !== removeUser.id
      })});
    console.log('render');

    return (
      <div>
        {modalIsOpen ? 'модалка открыта' : 'модалка закрыта'} <br />
        <Lists className="test" changeModal={onChangeModal} removeUser = {removeUser}
               userList = {this.state.users}/>
      </div>
    );
  }
}

export default App;
