import Image from './images/image1.png';
import Telegram from './images/tele.png';
import "./HomePage.css"
const Homepage = () => {
    return (
        <div className="hpcontainer">
            <div className="maintext">
                <h1 style={{color: "#0A1E64"}} className='headtext'><strong style={{fontWeight: 650}}>Вдохновляй и развивайся -  
                ITAM & ИКН объединяет</strong></h1>
                <p><strong style={{color: "#0A1E64"}}>Mentorio</strong> <strong style={{fontWeight: 550}}> - сервис, который связывает студентов НИТУ МИСИС и выпускников, решивших стать наставниками</strong></p>
                <p> <strong style={{fontWeight: 400}}>Ты начинаешь делать первые шаги в IT и нуждаешься в наставнике? Или ты уже смешарик, готовый поделиться знаниями с юными падаванами? Ты попал по адресу!</strong></p>
                <div className="search-container">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Поиск"
                  style={{
                     padding: "2%",
                     margin: "1% 0",
                     fontSize: "15px",
                     border: "2px solid #0A1E64",
                     borderRadius: "8px",
                     outline: "none",
                     width: "100%",
                  }}
                />
                </div>
                <div className='.triangle-left'></div>
                <button className='filter'>Добавить фильтр</button>
                <div className='imagetg'>
                    <a href='https://t.me/+I0RrGQrufSI2ZWE6' className='block'><img src={Telegram} style={{ width: "8%", }}/>
                    </a>
                </div>
                
            </div>

            <div className="image"> 
                <img src={Image} alt="описание" style={{ width: "80%", height: "100%"}}/>
            </div>
            
        </div>   
    );
};

export { Homepage };