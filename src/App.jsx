import React from 'react';
import Lists from './Lists';
import Input from './ui/Input';

class App extends React.Component {
  state = {
    modalIsOpen: false,
    users: [],
    inputValue: ''
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(users => this.setState({ users: users.data }));
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log(this.state.users);
    console.log('componentDidUpdate');
  }

  componentWillUnmount(prevProps, prevState) {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(prevProps) {
    console.log('shouldComponentUpdate');
    return true;
  }

  render() {
    const { modalIsOpen } = this.state;
    const onChangeModal = () => this.setState({ modalIsOpen: !modalIsOpen });
    console.log('render');

    return (
      <div>
        <Input
          name={true}
          value={this.state.inputValue}
          onChange={inputValue => this.setState({ inputValue })}
        />
        {this.state.inputValue === '115' && <div>Значение равно 115</div>}
        {modalIsOpen ? 'модалка открыта' : 'модалка закрыта'} <br />
        <Lists
          className="test"
          changeModal={onChangeModal}
          userList={this.state.users}
        />
      </div>
    );
  }
}

export default App;
