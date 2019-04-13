import React from 'react';
import {withFormik,Form,Field} from 'formik';
import Button from '@material-ui/core/es/Button/Button';


const UserData = ({values}) =>(
  <Form>
    <Field type="text" name="name" placeholder="ФИО"/>
    <Field type="email" name="email" placeholder="Email"/>
    <Field type="text" name="city" placeholder="Город"/>
    <Field type="text" name="street" placeholder="Улица"/>
    <Field type="text" name="phoneNumber" placeholder="Номер Тел"/>
    <Button type="submit">Сохранить</Button>
  </Form>
);

const UserTestForm = withFormik({
  mapPropsToValues({name,email,city,street,phoneNumer}){
    return {
      name: name || '',
      email : email || '',
      city: city || '',
      street: street || '',
      phoneNumer:phoneNumer || ''
    }
  },
  handleSubmit(values){
    console.log(this.props)
  }
})(UserData);


export default UserTestForm;


