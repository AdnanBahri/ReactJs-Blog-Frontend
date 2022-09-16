import { instance } from "./axios";

const login = async (username, password, setError) => {
    try {
        const res = await instance.post(
            'users/login/',
            JSON.stringify({username,password}),
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials: true,
            }
        )
        const accessToken = res?.data.access
        const refreshToken = res.data.refresh
        return {
            username,
            accessToken,
            refreshToken,
        }
    } catch (error) {
        if(!error?.response)
            setError("No Server Response")
        else if(error.response?.status === 400)
            setError("Missing Username Or Password")
        else if(error.response?.status === 401)
            setError("Unauthorized")
        else
            setError("Login Failed")
        return null
    }
}

const register = async (username,first_name,last_name,email,password, setError) => {
    try {
        const res = await instance.post(
            'users/register/',
            JSON.stringify({username,first_name,last_name,email,password}),
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials: true,
            }
        )
        return res
    } catch (error) {
        setError(error.response.statusText)
        return error
    }
}


export {
    login,
    register,
}