import $axiosInstance from "./axiosInstance.js"


class AuthApi {

    async registration(registrationData) {
        return $axiosInstance.post("/auth/registration", registrationData)
    }

    async login(loginData){
        return $axiosInstance.post("/auth/login", loginData)
    }

}

export default AuthApi