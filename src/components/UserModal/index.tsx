import React from 'react';
import { Modal } from 'react-bootstrap';
import UserForm from '../UserForm';
import { UserModalProps } from '../../@types';

const UserModal: React.FC<UserModalProps> = ({modal, onClose, addUser}) => (
    <Modal show={modal} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UserForm addUser={addUser} onClose={onClose}/>
        </Modal.Body>
    </Modal>
)

export default UserModal;