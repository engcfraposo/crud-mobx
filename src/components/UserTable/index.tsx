import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { UserTableProps } from '../../@types';
import UserTableRow from '../UserTableRow';



const UserTable: React.FC<UserTableProps> = ({users, removeUser, openEditUserModal}) => {
  return (
    <Table striped borderless responsive={"sm"} hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Nome</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map(user => (
          <UserTableRow 
            key={user.id} 
            user={user} 
            removeUser={() => removeUser(user.id)} 
            openEditUserModal={() => openEditUserModal(user)}
          />
        ))
      }
      </tbody>
    </Table>
  );
}

export default UserTable;