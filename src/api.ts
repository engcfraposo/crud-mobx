import axios from "axios";
import { User } from "./@types";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const renderUsers = async ():Promise<User[]> => {
    return api.get<User[]>("/users").then(res => res.data);
}

export const postUser = (user: Omit<User, "id">):Promise<User> => {
    return api.post<User>("/users", user).then(res => res.data);
}

export const deleteUser = async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
}

export const updateUser = async (id:number, user: Omit<User, "id">): Promise<User> => {
    return api.put<User>(`/users/${id}`, user).then(res => res.data);
}