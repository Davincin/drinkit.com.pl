import { Link } from 'react-router-dom';
import './NotFound.sass'

const NotFound = () => {
    
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found__row">
                    <i className="fas fa-times"></i>
                    <h2 className="not-found__title">Strona o podanym adresie nie istnieje.</h2>
                    <Link to="/" className="not-found__btn" >Wróć do strony głównej</Link>
                </div>
            </div>
        </section>
    );
}
 
export default NotFound;