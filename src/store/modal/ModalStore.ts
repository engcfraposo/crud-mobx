import {  action, observable } from "mobx";
import { User } from "../../@types";


const modalStore = observable({
    createUserModal: false,
    editUserModal: {} as User,
    openCreateUserModal: action(() => {
        modalStore.createUserModal = true;
    }),
    closeCreateUserModal: action(() => {
        modalStore.createUserModal = false;
    }),
    openEditUserModal: action((user: User) => {
        modalStore.editUserModal = user;
    }),
    closeEditUserModal: action(() => {
        modalStore.editUserModal = {} as User;
    }),
});

export default modalStore;