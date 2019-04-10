import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


function Lists(props) {

  const [buttonName, changeButtonName] = useState('My Button');
  const { className, changeModal,removeUser, userList } = props;
  console.log(userList);
  return (
    <div className={className}>

      <button style={{ marginLeft: '5%', marginTop: '20px', marginBottom: '20px', height: '30px' }}
              onClick={() => {
                removeUser();
                changeButtonName('Changed button name');
              }}><i className="fas fa-user-plus"> </i> Добавить пользователя
      </button>

      <div align="center">
        <Paper style={{ width: '90%' , marginBottom:'20px'}}>
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
                  <CustomTableCell align="center" >
                    <i class="fas fa-trash-alt" onClick={() => {removeUser(user)}}></i></CustomTableCell>
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
