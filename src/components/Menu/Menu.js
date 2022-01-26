import { useEffect, useState, useRef } from 'react';
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'
import './Menu.sass'
import Socials from './Socials/Socials';


const Menu = (props) => {
    
    const [windowWidth, setWindowWidth] = useState()
    const burger = useRef(null);
    const menuItems = useRef(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        
    }, [])

    const handleResizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    const handleBurgerClick = () => {
        burger.current.classList.toggle("is-active");
        menuItems.current.classList.toggle("nav__items--open")
    }

    

    const dropdownLinks = (
        <>
            <a href="#" className="nav__item">Drinki z whisky</a>
            <a href="#" className="nav__item">Drinki z ginem</a>
            <a href="#" className="nav__item">Drinki z wódką</a>
            <a href="#" className="nav__item">Inne drinki</a>
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
                <div className="nav__items" ref={menuItems}>
                    <a href="#" className="nav__item" onClick={handleBurgerClick}>Home</a>
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