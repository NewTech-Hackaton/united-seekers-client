import "../css/Header.css"
// import logo from "../assets/logo-text.png"
import search from "../assets/search.png"
import notification_bell from "../assets/notification-bell.png" 
import profile_image from "../assets/profile-icon.png"

function Header() {
    return (
        <div className="Header-Header">
        {/* <img className="Header-Logo" src={logo} alt="" /> */}
        <div className="Header-logo-area">
        <p>UNITED <br /> seekers</p>
        </div>

        <form action="" className="Header-search-bar">
            <input placeholder="Пошук"  type="search" />
            <button type="submit"> <img className="main-page-search_icon" src={search} alt=""/></button>
        </form>
        <button className="Header-bell-button"><img src={notification_bell} alt="" /></button>
        <button className="Header-profile-button"><img src={profile_image} alt="" /></button>
        </div>
    )
}

export default Header;