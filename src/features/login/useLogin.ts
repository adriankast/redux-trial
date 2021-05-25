import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loginThunk, resetToken, selectLogin } from "./loginSlice"

export const useLogin = () => {
    const loginInfo = useAppSelector(selectLogin);
    const dispatch = useAppDispatch();

    const tryLogin = (password: string) => dispatch(loginThunk(password));
    const logout = () => dispatch(resetToken());

    return {loginInfo, tryLogin, logout};
}
