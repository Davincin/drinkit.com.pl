import { Link } from "react-router-dom";
import './Offer.sass'
const Offer = () => {
    
    return (
        <section className="offer">
            <div className="container">
                <div className="offer__row">
                    <i className="fas fa-hourglass"></i>
                    <h2 className="offer__title">Strona w budowie</h2>
                    <Link to="/" className="offer__btn" >Wróć do strony głównej</Link>
                </div>
            </div>
        </section>
    );
}
 
export default Offer;