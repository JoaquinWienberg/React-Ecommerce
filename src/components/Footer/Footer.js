import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"

export default function Footer () {

    return (
        <div className="footer">
            <p>Elite Hardware - Todos los derechos reservados</p>
            <div>
                <p>Av. Cabildo 450</p>
                <p>Capital Federal, Argentina</p>
            </div>
            <div>
                <p>Nuestras redes:</p>
                <a className="socialLogo" href="https://www.instagram.com/"><InstagramIcon /></a>
                <a className="socialLogo" href="https://www.twitter.com/"><TwitterIcon /></a>
            </div>
        </div>
    )
}