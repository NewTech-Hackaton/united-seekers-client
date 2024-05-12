import { useRef } from "react";
import "../css/create-request.css";
import Header from "../components/header";
import default_photo_image from "../assets/default_photo_image.png"

function CreateRequest() {
    const usernameRef = useRef();
    const descriptionRef = useRef();
    const photoFileRef = useRef();
    const dateRef = useRef();
    const areaOfSearch = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
        photoFile: photoFileRef.current.value,
        areaOfSearch: areaOfSearch.current.value,
        username: usernameRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value
        };
        console.log(formData);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const imgPreview = document.getElementById('preview-photo');
            imgPreview.src = imageUrl;
        }
    };

    return (
        
        <>

        <Header/>
        <div className="Create-Request">
            <div className="Create-Request-form-area">
                <div className="Form_headline">Анкета запиту</div>
                <form className="Create-Request-form" onSubmit={handleSubmit}>
                <div className="Create-Request-form-left-area">
                        <input id="Create-Request-photo-button" type="file" ref={photoFileRef} onChange={handlePhotoChange} accept="image/*" />
                            <label htmlFor="Create-Request-photo-button">
                            <img id="preview-photo" className="preview-photo" src={default_photo_image} alt="Default Image" />
                        </label>
                    <input placeholder="Область пошуку" className="Create-Request-area-input" type="text" ref={areaOfSearch}/>
                </div>

                        <div className="Create-Request-form-right-area">
                            <input className="Create-Request-form-username" placeholder="Заголовок запиту" type="text" ref={usernameRef} />
                            <input  type="date" ref={dateRef} />
                            <textarea className="Create-Request-form-description" placeholder="Опис запиту" ref={descriptionRef} />
                            <button type="submit">Submit</button>

                        </div>
                    </form>
            </div>

        </div>
        
        
        </>

    );
}

export default CreateRequest;
