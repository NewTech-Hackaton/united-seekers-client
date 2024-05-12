import axios from "axios"

const API_URL = "http://localhost:7000"

const $axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

$axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default $axiosInstance
