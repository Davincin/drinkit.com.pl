import './Header.sass'

const Header = () => {
    return (
        <header className="header">
            <div className="header__hero-shadow"></div>
            <div className="header__row container">
                <h1 className="header__title">Drink<span className="gold-color">It</span></h1>
                <h4 className="header__subtitle">Koktajle, impreza, smak.</h4>
                <a href="#" className="header__btn" title="Sprawdź nowości">Sprawdź nowości <i className="fas fa-angle-down"></i></a>
            </div>
        </header>
    );
}
 
export default Header;