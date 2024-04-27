import Image from './images/image1.png';
import "./HomePage.css"
const Homepage = () => {
    return (
        <div className="hpcontainer">
            <div className="maintext">
                <h1 style={{color: "#0A1E64"}}>Вдохновляй и развивайся -  
                ITAM & ИКН объединяет</h1>
                <p><strong style={{color: "#0A1E64"}}>Mentorio</strong> <strong style={{fontWeight: 550}}> - сервис, который связывает студентов НИТУ МИСИС и выпускников, решивших стать наставниками</strong></p>
                <p> <strong style={{fontWeight: 400}}>Ты начинаешь делать первые шаги в IT и нуждаешься в наставнике? Или ты уже смешарик, готовый поделиться знаниями с юными падаванами? Ты попал по адресу!</strong></p>
            </div>

            <div class="image"> 
                <img src={Image} alt="описание" style={{ width: "92%", height: "100%"}}/>
            </div>
        </div>   
    );
};

export { Homepage };