import "./home.css";
import cloud from "../img/cloud.png";
import Caro from "../components/Carousel/Carousel"

export default function HomePage(props){

    return (
        <div className="background">
            <img src={cloud} alt="cloud" className="cloud"></img>
            <img src={cloud} alt="cloud" className="cloud2"></img>
            <div className="background-container">
                <h2>Bienvenidos a nuestro nuevo sitio!</h2>
                <Caro className="carousel"/>
            </div>
            
        </div>
    )
}