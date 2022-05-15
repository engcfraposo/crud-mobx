import {  action, observable } from "mobx";
import { User } from "../../@types";
import { postUser, renderUsers, deleteUser, updateUser } from "../../api";


const userStore = observable({
    userList: [] as User[],
    getUsers: action(async() => {
        const users = await renderUsers();
        userStore.userList = users;
    }),
    addUser: action(async(user: Omit<User, "id">) => {
        console.log("addUser", user);
        const newUser = await postUser(user);
        userStore.userList.push(newUser);
    }),
    removeUser: action(async(id: number) => {
        await deleteUser(id);
        userStore.userList = userStore.userList.filter(user => user.id !== id);
    }),
    updateUser: action(async(id: number, user: Omit<User, "id">) => {
        const alteredUser = await updateUser(id, user);
        const index = userStore.userList.findIndex(userUnit => userUnit.id === id);
        userStore.userList[index] = {
            ...userStore.userList[index],
            ...alteredUser
        };
    })
});

export default userStore;
