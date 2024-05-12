import Header from "../components/header";
import "../css/details.css"

function Details() {
    let announcement = [
        {id: 1, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Знайдено', imageUrl: ''},
        {id: 2, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Київ', foundUser: ' В пошуках', imageUrl: ''},
        {id: 3, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Не знайдено', imageUrl: ''},
        {id: 4, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту', loseDate: '12.09.2023', lastSeeLocation: 'Вроцлав', foundUser: ' Не знайдено', imageUrl: ''},
        {id: 5, title: 'Іванин Іван Іванович', description: 'Пропала людина віком 30 років, 180 сантиметрів зросту;', loseDate: '12.09.2023', lastSeeLocation: 'Львів', foundUser: ' Не знайдено', imageUrl: ''}
    ];
    return (
        <>
        <Header/>
        <div className="details-body">
        <div className="details-div">
        {announcement.map((req, index) => (
            <p>{req.title}</p>
        ))}
        </div>
        </div>
        </>
    )
}

export default Details;