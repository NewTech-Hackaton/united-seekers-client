import "../css/authorization.css"
import logoOnPage from "../assets/logo-on-page.png"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Authorization() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/reg'); 
    };
    return (
        <div className="authorization-body">
            <div className="authorization-div-left"></div>
            <div className="authorization-div-center">
                <form className="authorization-form-top">
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