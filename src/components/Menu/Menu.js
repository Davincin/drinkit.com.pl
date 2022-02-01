import { useEffect, useState, useRef } from 'react';
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'
import './Menu.sass'
import Socials from './Socials/Socials';
import { NavLink, useNavigate } from 'react-router-dom';


const Menu = (props) => {
    
    const [windowWidth, setWindowWidth] = useState()
    const burger = useRef(null);
    const menuItems = useRef(null);
    const navigate = useNavigate();
    console.log(navigate);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        
    }, [])

    const handleResizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    const handleBurgerClick = () => {
        burger.current.classList.toggle("is-active");
        menuItems.current.classList.toggle("nav__items--open");
    }

    

    const dropdownLinks = (
        <>
            <NavLink to="/drinkizwhisky" className="nav__item">Drinki z whisky</NavLink>
            <NavLink to="/drinkizginem" className="nav__item">Drinki z ginem</NavLink>
            <NavLink to="/drinkizwodka" className="nav__item">Drinki z wódką</NavLink>
            <NavLink to="/innedrinki" className="nav__item">Inne drinki</NavLink>
        </>
    )
    
    window.addEventListener("resize", handleResizeWindow)
    
    return (
        <nav className="nav" id="nav">
            <div className="nav__row">
                <div className="nav__logo">
                    {windowWidth >= 992 && <Socials links={props.links}/>}
                    <h3>Drink<span className="gold-color">It</span></h3>
                </div>
                {windowWidth < 992 && (
                    <div className="nav__burger"  onClick={handleBurgerClick}>
                        <button className="hamburger hamburger--spin" ref={burger} aria-label="Menu burger button" type="button">
                            <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                        </button>
                    </div>
                )}
                <div className="nav__items" onClick={handleBurgerClick} ref={menuItems}>
                    <NavLink to="/" className="nav__item">Home</NavLink>
                    {windowWidth >= 992 ? (
                        <div className="nav__item nav__dropdown-item">
                            Drinki <i className="fas fa-angle-down"></i>
                            <div className="nav__dropdown-links">
                                {dropdownLinks}
                            </div>
                        </div>
                    ) : dropdownLinks}
                    <a href="#" className="nav__item">Oferta</a>
                    <a href="#" className="nav__item">Kontakt</a>
                    {windowWidth < 992 && <Socials links={props.links}/>}
                </div>
            </div>
        </nav>
    );
}
 
export default Menu;