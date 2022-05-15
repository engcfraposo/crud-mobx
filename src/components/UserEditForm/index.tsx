import { useFormik } from 'formik';
import React, { Fragment, useRef } from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import { UserEditProps } from '../../@types';


const UserEditForm: React.FC<UserEditProps> = ({updateUser, editUserModal, onClose}) => {
  const name = useRef(null);
  const age = useRef(null);  
  const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            name: editUserModal.name,
            age: editUserModal.age
        },
        onSubmit: (values) => {
          updateUser(editUserModal.id, values)
          onClose()
        }
    });
  return (
    <Fragment>
      <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-5">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          ref={name}
          id="name" 
          type="text" 
          placeholder="Cadastre o nome completo" 
          value={formik.values.name} 
          onChange={formik.handleChange}
          isValid={formik.touched.name && !formik.errors.name}
          isInvalid={formik.touched.name && !!formik.errors.name} 
        />
        <Overlay target={name.current} show={!!formik.errors.name} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {formik.errors.name}
          </Tooltip>
        )}
      </Overlay>
      </Form.Group>
    
      <Form.Group className="mb-5">
        <Form.Label>Idade</Form.Label>
        <Form.Control 
          ref={age}
          id="age" 
          type="number" 
          placeholder="Cadastre a sua idade" 
          value={formik.values.age} 
          onChange={formik.handleChange}
          isValid={formik.touched.age && !formik.errors.age}
          isInvalid={formik.touched.age && !!formik.errors.age} 
        />
        <Overlay target={age.current} show={!!formik.errors.age} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {formik.errors.age}
          </Tooltip>
        )}
      </Overlay>
      </Form.Group>
      <Form.Group>
        <Button variant="success" type="submit" style={{marginRight: 15}}>
          Adicionar
        </Button>
        <Button variant="outline-danger" onClick={formik.handleReset}>
          Resetar
        </Button>
      </Form.Group>
      
    </Form>
  </Fragment>
  );
}

export default UserEditForm;