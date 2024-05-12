import authApi from "../api/authApi.js";
import AuthApi from "../api/authApi.js";


export const registration = async (name, email, password) => {
    try {
        const response = await AuthApi.registration(name, email, password)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        throw new Error(`Internal Server Error: ${error}`)
    }
}

export const login = async (email, password) => {
    try {
        const response = await AuthApi.login(loginData)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        throw new Error(`Internal Server Error: ${error}`)
    }
}