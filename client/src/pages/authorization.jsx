import "../css/authorization.css"
import logoOnPage from "../assets/logo-on-page.png"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { login } from "./../api/authApi"

function Authorization() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const token = localStorage.getItem("token")

    if (token) {
        navigate("/")
    }

  
    const handleClick = () => {
      navigate('/reg'); 
    };

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const loginResult = await login(email, password)
            console.log(loginResult)
            return loginResult
        } catch (error) {
            throw new Error(`Помилка при парсингу даних: ${error}`)
        }
    }

    return (
        <div className="authorization-body">
            <div className="authorization-div-left"></div>
            <div className="authorization-div-center">
                <form className="authorization-form-top" onSubmit={handleLogin}>
                    <img src={logoOnPage} alt="" />
                    <p>ВХІД</p>
                    <input type="email" placeholder="Електронна пошта" onChange={(e) => setEmail(e.target.value)} required></input>
                    <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} required></input>
                    <button>Увійти</button>
                </form>
                <div className="authorization-form-botom">
                    <p>Не маєте аккаунту?</p>
                    <button onClick={handleClick}>Зареєструватись</button>
                </div>
            </div>
            <div className="authorization-div-right"></div>
        </div>
    )
}

export default Authorization;