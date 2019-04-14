import React from 'react';
import Lists from './Lists';
import swal from 'sweetalert';


class App extends React.Component {
  state = {
    modalIsOpen: false,
    users: []
  };

  componentWillMount() {
    // console.log('componentWillMount')
  }

  componentDidMount() {


    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
        // console.log(this.state)

      });

    // console.log('componentDidMount')
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }

  componentWillUnmount(prevProps, prevState) {
    // console.log('componentWillUnmount')
  }

  shouldComponentUpdate(prevProps) {
    // console.log('shouldComponentUpdate')
    return true;
  }

  render() {
    const { users } = this.state;
    const addUser = user => this.setState({ users: [...users, user] });
    const editUser = user => {
        this.setState({
        users: users.map(item=> user.name === item.name ? user : item)
    });
        swal('Данные сохранены успешно', { icon: 'success' });
    };
    const removeUser = userObj => {
        this.setState({ users: users.filter(user => user.id !== userObj.id) });
        swal('Удалено', { icon: 'success' });
    };

    return (
      <div>
        <Lists removeUser={removeUser} userList={users} addUser={addUser} editUser={editUser}/>
      </div>
    );
  }
}

export default App;
