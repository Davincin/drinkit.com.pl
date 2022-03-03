import { Link } from "react-router-dom";
import './HomeButton.sass'

const HomeButton = () => {
    
    return (
        <Link to="/" className="home-button">Wróć do strony głównej</Link>
    );
}
 
export default HomeButton;