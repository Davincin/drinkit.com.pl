import './NotFound.sass'
import HomeButton from '../UI/HomeButton/HomeButton'

const NotFound = () => {
    
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found__row">
                    <i className="fas fa-times"></i>
                    <h2 className="not-found__title">Strona o podanym adresie nie istnieje.</h2>
                    <HomeButton />
                </div>
            </div>
        </section>
    );
}
 
export default NotFound;