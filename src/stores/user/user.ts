import { createStore, useStore } from 'zustand';
import { uid } from '@/utils/uid';

export enum userRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export type User = {
    id : string;
    role : userRole;
}

export type UserStore = {
    users : User[];
    showUser : (
        User : Omit<User, 'id'>
    ) => void;
    clearUser : (
        id : string
    ) => void;
}

export const userStore = createStore<UserStore>((set) => ({
    users : [],
    showUser : (user) => {
        const id = uid();
        set((state) => ({
            users : [
                ...state.users,
                { id, ...user },
            ],
        }));
    },
    clearUser(id) {
        set((state) => ({
            users : state.users.filter(
                (user) => user.id !== id
            )
        }));
    },
}));

export const useUser = () => useStore(userStore);