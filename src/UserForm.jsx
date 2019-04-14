import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/es/Button/Button';
import swal from 'sweetalert';


const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  phone: yup.string().required()
});


const userForm = ({ user, addUser, editUser, editUserProfil }) => (

  <Formik

    initialValues={{
        name: user.name || '',
        email: user.email || '',
        city: user.address ? user.address.city : '',
        street: user.address ? user.address.street : '',
        phone: user.phone || ''
      }}

    validationSchema={schema}

    onSubmit={values => {
      swal({
        icon: 'warning',
        text: 'Вы действительно хотите сохранить данные?',
        dangerMode: true,
        buttons: true
      }).then((confirm) => {
        if (confirm) {
          values.address = { city: values.city, street: values.street };
          Object.keys(user).length === 0 ? addUser(values) : editUser(values);
        }
        editUserProfil(false);
      });
    }}
  >
    {({ values, errors, handleChange, handleSubmit }) => (
      <Form className="p-3" onSubmit={handleSubmit}>
        <Field
          className="user-profile"
          type="text"
          name="name"
          placeholder="ФИО"
          value={values.name}
          onChange={handleChange}/>
        <Field
          className="user-profile"
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}/>
        <Field
          className="user-profile"
          type="text"
          name="city"
          placeholder="Город"
          value={values.city}
          onChange={handleChange}/>
        <Field
          className="user-profile"
          type="text"
          name="street"
          placeholder="Улица"
          value={values.street}
          onChange={handleChange}/>
        <Field
          className="user-profile"
          type="text"
          name="phone"
          placeholder="Номер Тел"
          value={values.phone}
          onChange={handleChange}/>

        <Button type="submit" style={{ color: 'green' }}>
          Сохранить
        </Button>
      </Form>
    )}
  </Formik>
);


export default userForm;


