import React, { useMemo } from 'react';
import { BsTrashFill, BsPenFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { UserTableRowProps } from '../../@types';



const UserTableRow: React.FC<UserTableRowProps> = ({user, removeUser, openEditUserModal}) => useMemo(() => (
    <tr>
        <td>{user.id}</td>
        <td colSpan={2}>{user.name}</td>
        <td>{user.age}</td>
        <td style={{width: "10rem"}}>
            <Button type="button" variant="danger" onClick={removeUser} style={{marginRight: 5}}>
                <BsTrashFill size={18} />
            </Button>
            <Button type="button" variant="primary" onClick={openEditUserModal}>
                <BsPenFill size={18} />
            </Button>
        </td>
    </tr>
), [user.id, user.name, user.age])

export default UserTableRow;