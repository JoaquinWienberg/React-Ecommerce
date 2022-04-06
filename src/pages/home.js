import { Link } from 'react-router-dom';
import "./home.css";
import cloud from "../img/cloud.png"

export default function HomePage(props){

    return (
        <div className="background">
            <img src={cloud} alt="cloud" className="cloud"></img>
            <img src={cloud} alt="cloud" className="cloud2"></img>
            <div className="background-container">
                <h2>Bienvenidos a nuestro nuevo sitio!</h2>
                <div className="products"><Link to={"/products"}>Ver productos</Link></div>
            </div>
            
        </div>
    )
}