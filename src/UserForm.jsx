import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/es/Button/Button';


const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  phoneNumber: yup.string().required()
});


const userForm = ({user}) => (

  <Formik
    initialValues={
      {
        name: user.name || '',
        email: user.email || '',
        city: user.city || '',
        street: user.street || '',
        phoneNumber: user.phoneNumber || '',
      }}
    validationSchema={schema}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ values, errors, handleChange, handleSubmit }) => (
      <Form className="p-3" onSubmit={handleSubmit}>
        <Field
          style={{margin:'5px',height:'30px',padding:'5px'}}
          type="text"
          name="name"
          placeholder="ФИО"
          value={values.name}
          onChange={handleChange}/>
        <Field
          style={{margin:'5px',height:'30px',padding:'5px'}}
          type="email"
          name="email"
          placeholder="Email"
          value={values.Email}
          onChange={handleChange}/>
        <Field
          style={{margin:'5px',height:'30px',padding:'5px'}}
          type="text"
          name="city"
          placeholder="Город"
          value={values.city}
          onChange={handleChange}/>
        <Field
          style={{margin:'5px',height:'30px',padding:'5px'}}
          type="text"
          name="street"
          placeholder="Улица"
          value={values.street}
          onChange={handleChange}/>
        <Field
          style={{margin:'5px',height:'30px',padding:'5px'}}
          type="text"
          name="phoneNumber"
          placeholder="Номер Тел"
          value={values.phoneNumber}
          onChange={handleChange}/>

        <Button type="submit" style={{color:'green'}}>
          Сохранить
        </Button>
      </Form>
    )}
  </Formik>
);


export default userForm;


