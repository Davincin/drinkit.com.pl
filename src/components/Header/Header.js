import './Header.sass'

const Header = props => {
    
    const {extraClass, withoutButton, withoutSubtitle, title} = props;
    
    const homeTitle = (
        <>
            Drink<span className="gold-color">It</span>
        </>
    )

    return (
        <header className={`header ${extraClass ? extraClass : ""}`}>
            <div className="header__hero-shadow"></div>
            <div className="header__row container">
                <h1 className="header__title">{props.title ? props.title : homeTitle}</h1>
                {(!withoutSubtitle) && <h4 className="header__subtitle">Koktajle, impreza, smak.</h4>}
                {(!withoutButton) && <a href="#" className="header__btn" title="Sprawdź nowości">Sprawdź nowości <i className="fas fa-angle-down"></i></a>}
            </div>
        </header>
    );
}
 
export default Header;