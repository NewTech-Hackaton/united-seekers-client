import { useState } from "react";
import "../css/profile.css";
import Header from "../components/header";
import default_photo_image from "../assets/default_photo_image.png";
import change_icon from "../assets/change-icon.png";

function Profile() {
    const [userName, setUserName] = useState(''); // Стан для зберігання ім'я користувача
    const [email, setEmail] = useState(''); // Стан для зберігання електронної пошти
    const [editingName, setEditingName] = useState(false); // Стан для перевірки, чи відбувається редагування імені
    const [editingEmail, setEditingEmail] = useState(false); // Стан для перевірки, чи відбувається редагування електронної пошти
    const [editingAreaOfSearch, setEditingAreaOfSearch] = useState(false); // Стан для перевірки, чи відбувається редагування області пошуку
    const [newName, setNewName] = useState(''); // Стан для зберігання нового імені
    const [newEmail, setNewEmail] = useState(''); // Стан для зберігання нової електронної пошти
    const [newAreaOfSearch, setNewAreaOfSearch] = useState(''); // Стан для зберігання нової області пошуку

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const imgProfilePreview = document.getElementById('Profile-preview-photo');
            imgProfilePreview.src = imageUrl;
        }
    };

    // Функція для збереження нового імені
    const saveName = () => {
        setUserName(newName);
        setEditingName(false); // Закриваємо режим редагування імені
        // Тут ви можете додати логіку для відправки нового імені до бази даних
    };

    // Функція для збереження нової електронної пошти
    const saveEmail = () => {
        // Перевірка формату електронної пошти
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            alert("Неправильний формат електронної пошти!");
            return;
        }
        
        setEmail(newEmail);
        setEditingEmail(false); // Закриваємо режим редагування електронної пошти
        // Тут ви можете додати логіку для відправки нової електронної пошти до бази даних
    };

    // Функція для збереження нової області пошуку
    const saveAreaOfSearch = () => {
        setEditingAreaOfSearch(false); // Закриваємо режим редагування області пошуку
        // Тут ви можете додати логіку для відправки нової області пошуку до бази даних
    };

    return (
        <>
            <Header/>
            <div className="Create-Request">
                <div className="Create-Request-form-area">
                    <div className="Form_headline">Профіль</div>
                    <div className="Create-Request-form">
                        <div className="Profile-form-left-area">
                            <input id="Create-Request-photo-button" type="file" onChange={handlePhotoChange} accept="image/*" />
                            <label htmlFor="Create-Request-photo-button">
                                <img id="Profile-preview-photo" className="Profile-preview-photo" src={default_photo_image} alt="Default Image" />
                            </label>
                            {editingAreaOfSearch ? (
                                <div>
                                    <input type="text" value={newAreaOfSearch} onChange={(e) => setNewAreaOfSearch(e.target.value)} />
                                    <button onClick={saveAreaOfSearch}>Зберегти</button>
                                </div>
                            ) : (
                                <div className="Profile-area-of-search-area">
                                    <p>Область пошуку: {newAreaOfSearch}</p>
                                    <button className="Button-for-set-new-name-or-email" onClick={() => setEditingAreaOfSearch(true)}> <img src={change_icon} alt="" /> </button>
                                </div>
                            )}
                        </div>
                        <div className="Profile-form-right-area">
                            {editingName ? ( // Якщо режим редагування імені активний
                                <div>
                                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                                    <button className="Button-for-set-new-name-or-email" onClick={saveName}>Зберегти</button>
                                </div>
                            ) : (
                                <div className="Profile-name-area">
                                    <p>Ім'я: {userName}</p>
                                    <button className="Button-for-set-new-name-or-email" onClick={() => setEditingName(true)}> <img src={change_icon} alt="" /> </button>
                                </div>
                            )}

                            {editingEmail ? ( // Якщо режим редагування електронної пошти активний
                                <div>
                                    <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                    <button className="Button-for-set-new-name-or-email" onClick={saveEmail}>Зберегти</button>
                                </div>
                            ) : (
                                <div className="Profile-email-area">
                                    <p>Електронна пошта: {email}</p>
                                    <button onClick={() => setEditingEmail(true)}> <img src={change_icon} alt="" /> </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
