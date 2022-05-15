import React from 'react';
import { Modal } from 'react-bootstrap';
import UserEditForm from '../UserEditForm';
import { UserEditModalProps } from '../../@types';

const UserEditModal: React.FC<UserEditModalProps> = ({editUserModal, onClose, updateUser}) => (
    <Modal show={Object.keys(editUserModal).length > 0} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UserEditForm 
                onClose={onClose}
                editUserModal={editUserModal} 
                updateUser={updateUser}
            />
        </Modal.Body>
    </Modal>
)

export default UserEditModal;