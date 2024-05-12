import "../css/registration-volunteer.css"

function RegistrationVolunteer({ handleEmailChange, handleNicknameChange, handlePasswordChange }) {
    return (
        <>
        <input type="email" placeholder="Електронна пошта" onChange={handleEmailChange} className="reg-org-input" required></input>
        <input type="text" placeholder="ПІБ" onChange={handleNicknameChange} className="reg-org-input" required></input>
        <label className="reg-org-lable">
            Документи для верифікації
            <input type="file" id="reg-org-doc" multiple ></input>
        </label>
        <input type="password" placeholder="Пароль" onChange={handlePasswordChange} className="reg-org-input" required></input>
        </>
    )
}

export default RegistrationVolunteer;