import { selectLogin } from "../features/login/loginSlice"
import { useAppSelector } from "./hooks"

export const useToken = () => {
    const {status, token} = useAppSelector(selectLogin);
    
    return {
        status,
        value: token
    }
}
