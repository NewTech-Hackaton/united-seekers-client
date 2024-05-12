import "../css/registration.css"
import logoOnPage from "../assets/logo-on-page.png"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import RegistrationOrganization from "../components/registration-organization"
import RegistrationVolunteer from "../components/registration-volunteer"

function Registration() {
    const [comp, setComp] = useState('RegistrationVolunteer');
    const [buttonOrg, setButtonOrg] = useState('buttonOther');
    const [buttonVol, setButtonVol] = useState('buttonChois');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [canAdd, setCanAdd] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate('/auth'); 
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        {comp === 'RegistrationOrganization' ? setCanAdd(true) : setCanAdd(false)}
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const changeToVol = () => {
        setComp('RegistrationVolunteer');
        setButtonOrg('buttonOther');
        setButtonVol('buttonChois');
    };

    const changeToOrg = () => {
        setComp('RegistrationOrganization');
        setButtonOrg('buttonChois');
        setButtonVol('buttonOther');
    };

    return (
        <div className="registration-body">
            <div className="registration-div-left"></div>
            <div className="registration-div-center">
                <div className="registration-form-top">
                    <img src={logoOnPage} alt="" />
                    <p>ЗАРЕЄСТРУВАТИСЯ</p>
                    <div className="registration-div-change">
                        <button onClick={changeToOrg} className={buttonOrg}>Організація</button>
                        <button onClick={changeToVol} className={buttonVol}>Волонтер</button>
                    </div>
                    <form>
                        {comp === 'RegistrationOrganization' ? (
                            <RegistrationOrganization
                                handleEmailChange={handleEmailChange}
                                handleNicknameChange={handleNicknameChange}
                                handlePasswordChange={handlePasswordChange}
                            />
                        ) : (
                            <RegistrationVolunteer
                            handleEmailChange={handleEmailChange}
                            handleNicknameChange={handleNicknameChange}
                            handlePasswordChange={handlePasswordChange}
                        />
                        )}
                        <button className="registration-button-submit">Зареєструватись</button>
                    </form>
                </div>
                <div className="registration-form-botom">
                    <p>Вже маєте аккаунт?</p>
                    <button onClick={handleClick}>Увійти</button>
                </div>
            </div>
            <div className="registration-div-right"></div>
        </div>
    )
}

export default Registration;
