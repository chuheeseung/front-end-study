import { atom } from 'recoil';

export const nicknameState = atom({
    key: "nicknameState",
    default: "",
});

export const loginFlagState = atom({
    key: "loginFlagState",
    default: false,
});

export const userIdxState = atom({
    key: "userIdxState",
    default: 0,
})