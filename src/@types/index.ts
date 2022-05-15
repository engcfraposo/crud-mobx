export interface User {
    id: number;
    name: string;
    age: number;
}

export interface UserFormProps {
    addUser: (user: Omit<User, "id">) => void;
    onClose: () => void;
}

export interface UserEditProps {
    editUserModal: User;
    updateUser: (id: number, user: Omit<User, "id">) => void;
    onClose: () => void;
}

export interface UserTableRowProps {
    user: User;
    removeUser: () => void;
    openEditUserModal: () => void;
}

export interface UserTableProps {
    users: User[];
    removeUser: (id: number) => void;
    openEditUserModal: (user: User) => void;
}

export interface UserEditModalProps {
    editUserModal: User;
    onClose: () => void;
    updateUser: (id: number, user: Omit<User, "id">) => void;
}

export interface UserModalProps {
    modal: boolean;
    onClose: () => void;
    addUser: (user: Omit<User, 'id'>) => void;
}

export interface UserModalProps {
    modal: boolean;
    onClose: () => void;
    addUser: (user: Omit<User, 'id'>) => void;
}

export interface RootStore {
    userStore: {
        userList: User[];
        getUsers: () => void;
        addUser: (user: Omit<User, "id">) => void;
        removeUser: (id: number) => void;
        updateUser: (id: number, user: Omit<User, "id">) => void;
    };
    modalStore: {
        createUserModal: boolean;
        openCreateUserModal: () => void;
        closeCreateUserModal: () => void;
        editUserModal: User;
        openEditUserModal: (user: User) => void;
        closeEditUserModal: () => void;
    };
}