import React, { useState } from "react"
import { useLogin } from "./useLogin"

const Login = () =>
{
    const [ password, setPassword ] = useState<string>( "" )
    const { loginInfo, tryLogin, logout } = useLogin()

    const handleClick = () =>
    {
        if ( loginInfo.status !== "loggedIn" )
        {
            tryLogin( password )
        }
        else
        {
            logout()
        }
    }
    return (
        <>
            <span>password is "secret"</span><br />
            <input type="password" onChange={( e ) => setPassword( e.target.value )} value={password} placeholder="***" />
            {loginInfo.status === "loading"
                ? "..."
                : <button type="button" onClick={handleClick} style={{ color: loginInfo.status === "failed" ? "red" : "black" }}>
                    {loginInfo.status === "loggedIn" ? "Logout" : "Login"}
                </button>}
        </>
    )
}

export default Login
