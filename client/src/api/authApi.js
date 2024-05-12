import $axiosInstance from "./axiosInstance"

export const registration = async (nickname, email, password) => {
    try {
        const response = await $axiosInstance.post("/auth/registration", { nickname, email, password })
        localStorage.setItem("token", response.data.token.tokenValue)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error(`Помилка при парсингу даних: ${error}`)
    }
}

export const login = async (email, password) => {
    try {
        const response = await $axiosInstance.post("/auth/login", { email, password })
        localStorage.setItem("token", response.data[0].tokenValue)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error(`Помилка при парсингу даних: ${error}`)
    }
}