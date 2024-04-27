import Image from './images/image1.png';

const Homepage = () => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <h1 style={{color: "#0A1E64"}}>Вдохновляй и развивайся -  
                ITAM & ИКН объединяет</h1>
                <p>Mentorio - сервис, который связывает студентов НИТУ МИСИС и выпускников, решивших стать наставниками</p>
                <p>Ты начинаешь делать первые шаги в IT и нуждаешься в наставнике? Или ты уже смешарик, готовый поделиться знаниями с юными падаванами? Ты попал по адресу!</p>
            </div>

            <div className="col-sm-5"> 
                <img src={Image} alt="описание" style={{ width: "30%" }}/>
            </div>
        </div>   
    );
};

export { Homepage };