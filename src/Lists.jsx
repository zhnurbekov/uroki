import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
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
const CustomTableCell = compFunc(TableCell);


function Lists({removeUser, userList}) {

  return (
    <div>


      <div style={{marginLeft: '5%'}}>
        <button style={{  marginTop: '20px', marginBottom: '20px', height: '30px' }}>
          <i className="fas fa-user-plus"> </i> Добавить пользователя
        </button>
        <UserForm user ={{name :"Zhaiyk"}} />
      </div>

      <div align="center">
        <Paper style={{ width: '90%', marginBottom: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell align="left">Имя</CustomTableCell>
                <CustomTableCell align="left">Почта</CustomTableCell>
                <CustomTableCell align="left">Город</CustomTableCell>
                <CustomTableCell align="left">Улица</CustomTableCell>
                <CustomTableCell align="left">Номер тел</CustomTableCell>
                <CustomTableCell align="center">Действия</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map(user => (
                <TableRow key={user.id}>
                  <CustomTableCell component="th" scope="row"> {user.name}</CustomTableCell>
                  <CustomTableCell align="left">{user.email}</CustomTableCell>
                  <CustomTableCell align="left">{user.address.city}</CustomTableCell>
                  <CustomTableCell align="left">{user.address.street}</CustomTableCell>
                  <CustomTableCell align="left">{user.phone}</CustomTableCell>
                  <CustomTableCell align="center">
                    <Button><i className="fas fa-trash-alt" onClick={() => {
                      swal({
                        icon: 'warning',
                        text: 'Вы действительно хотите удалить запись?',
                        dangerMode: true,
                        buttons: true
                      }).then((confirm) => confirm && removeUser(user));
                    }}/></Button>
                  </CustomTableCell>
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
