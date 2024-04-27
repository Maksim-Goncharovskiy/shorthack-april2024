import Image from './images/telegram.jpg'

const ContactPage = () => {
    return (
        <div className="contactpage">
            <h1>Канал mentorio в telegram</h1>
            <div>
                <img src={Image} style={{ width: "50%", height: "50%"}} />
            </div>
        </div>        
    )
}

export {ContactPage};