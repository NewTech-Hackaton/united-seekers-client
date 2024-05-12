import Header from "../components/header";
import "../css/search.css"

function Search() {
    let announcement = [
        {id: 1, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Знайдено', imageUrl: ''},
        {id: 2, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Київ', foundUser: ' В пошуках', imageUrl: ''},
        {id: 3, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Не знайдено', imageUrl: ''},
        {id: 4, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Вроцлав', foundUser: ' Не знайдено', imageUrl: ''},
        {id: 5, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту;', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Не знайдено', imageUrl: ''}
    ];
    return (
        <>
        <Header />
        <div className="search-body">
            <div className="search-left-25">
                <div className="search-filter-div">
                    <p>Фільтрація</p>
                    <input type="text" className="search-input-location" placeholder="Напишіть локацію пошуку"></input>
                </div>
            </div>
            <div className="search-right-75">
                {announcement.map((req, index) => (
                    <div key={index} className="search-div-request">
                        <div className="search-image-found">
                            <img src={req.imageUrl}/>
                            <p id="search-found">{req.foundUser}</p>
                        </div>
                        <div className="search-title-description">
                            <p id="search-title">{req.title}</p>
                            <p id="search-description">{req.description}</p>
                            <div className="search-data-location">
                                <p>{req.lastSeeLocation}</p>
                                <p>{req.loseDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        </>
    )
}

export default Search;