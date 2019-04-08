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

    let schoolId = true;
    let personalId = false;
    let object = {
      '111': 1111,
      '222': 2222,
      '333': 3333,
      '444': 4444,
      '555': 5555,
    };
    let array = [
      1111,
      2222,
      3333,
      4444,
      5555
    ];
    let object2 = {...object, ['222']: 654564};
    // let array2 = [...array];
    // let param = schoolId && personalId;
    // let param = schoolId || personalId;
    // let param = schoolId ? personalId : 'dsfsdfsd';
    // for (const [key, value] of Object.entries(object)) {
    //   console.log(key, value)
    // }

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
