import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MaterialTableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';
import Button from '@material-ui/core/es/Button/Button';
import UserForm from './UserForm';


let themeFunc = function(theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
};

const compFunc = withStyles(themeFunc);
const Cell = compFunc(MaterialTableCell);


function Lists({ removeUser, userList, addUser, editUser }) {

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    console.log('useEffect - componentDidUpdate')
    return () => {
      console.log('useEffect - componentWillUnmount')
    }
  }, [editModalOpen]);

  useEffect(() => {
    console.log('useEffect2 - componentDidUpdate')
    return () => {
      console.log('useEffect2 - componentWillUnmount')
    }
  }, [userObj]);


  return (
    <div>
      <div style={{ marginLeft: '5%' }}>
        <button style={{ marginTop: '20px', marginBottom: '20px', height: '30px' }}
                onClick={() => {
                  setUserObj({});
                  setEditModalOpen(true);
                }}>
          <i className="fas fa-user-plus"> </i> Добавить пользователя
        </button>
        {editModalOpen && (
          <UserForm user={userObj}
                    addUser={addUser}
                    editUser={editUser}
                    editUserProfil={setEditModalOpen}/>
        )}

      </div>
      <div align="center">
        <Paper style={{ width: '90%', marginBottom: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <Cell align="left">Имя</Cell>
                <Cell align="left">Почта</Cell>
                <Cell align="left">Город</Cell>
                <Cell align="left">Улица</Cell>
                <Cell align="left">Номер тел</Cell>
                <Cell align="center">Действия</Cell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user, index) => (
                <TableRow key={index}>
                  <Cell component="th" scope="row"> {user.name}</Cell>
                  <Cell align="left">{user.email}</Cell>
                  <Cell align="left">{user.address.city}</Cell>
                  <Cell align="left">{user.address.street}</Cell>
                  <Cell align="left">{user.phone}</Cell>
                  <Cell align="center">
                    <Button onClick={() => {
                      swal({
                        icon: 'warning',
                        text: 'Вы действительно хотите удалить запись?',
                        dangerMode: true,
                        buttons: true
                      }).then((confirm) => confirm && removeUser(user));
                    }}>
                      <i className="fas fa-trash-alt"/>
                    </Button>
                    <Button
                      onClick={() => {
                        console.log(user)
                        setUserObj(user);
                        setEditModalOpen(true);
                      }}
                    ><i className="fas fa-pen"/></Button>
                  </Cell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

      </div>
    </div>
  );
}

export default Lists;
