import { useEffect, useState, useRef } from 'react';
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'
import './Menu.sass'
import Socials from './Socials/Socials';
import { NavLink, useLocation } from 'react-router-dom';


const Menu = props => {
    
    const [isDesktop, setIsDesktop] = useState();
    const [navOpen, setNavOpen] = useState(false)
    const [dropdownIsActive, setDropDownIsActive] = useState(false)
    
    let location = useLocation()

    const MyNavLink = x => (<NavLink {...x} onClick={!isDesktop ? handleNavMobile : null}/>)

    useEffect(() => {
        
        if(window.innerWidth >= 992) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
            
        }
        
    }, [])

    useEffect(() => {
        
        const path = location.pathname;
        
        if(path.includes('drinkiz') || path.includes('innedrinki')) {
            setDropDownIsActive(true)
        } else {
            setDropDownIsActive(false)
        }
    }, [location])

    const handleResizeWindow = () => {
        if(window.innerWidth >= 992) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }

    
    const handleNavMobile = () => {
        if(navOpen) {
            setNavOpen(false);
        } else if (!navOpen) {
            setNavOpen(true);
        };
    }

    const dropdownLinks = (
        <>
            <MyNavLink to="/drinkizwhisky" className="nav__item nav__item--dropdown">Drinki z whisky</MyNavLink>
            <MyNavLink to="/drinkizginem" className="nav__item nav__item--dropdown">Drinki z ginem</MyNavLink>
            <MyNavLink to="/drinkizwodka" className="nav__item nav__item--dropdown">Drinki z wódką</MyNavLink>
            <MyNavLink to="/innedrinki" className="nav__item nav__item--dropdown">Inne drinki</MyNavLink>
        </>
    )
    
    
    window.addEventListener("resize", handleResizeWindow)
    
    return (
        
        <nav className="nav" id="nav">
            <div className="nav__row">
                
                <div className="nav__logo">
                    {isDesktop && <Socials links={props.links}/>}
                    <h3>Drink<span className="gold-color">It</span></h3>
                </div>
                
                {!isDesktop && (
                    <div className="nav__burger"  onClick={handleNavMobile}>
                        <button className={`hamburger hamburger--spin ${navOpen ? 'is-active' : ''}`} aria-label="Menu burger button" type="button">
                            <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                        </button>
                    </div>
                )}
                
                <div className={`nav__items ${navOpen ? 'nav__items--open' : ''}`}>
                    <MyNavLink to="/" className="nav__item">Home</MyNavLink>
                    {isDesktop ? (
                        <div className={`nav__item nav__dropdown-item ${dropdownIsActive ? 'active' : ""}`}>
                            Drinki <i className="fas fa-angle-down"></i>
                            <div className="nav__dropdown-links">
                                {dropdownLinks}
                            </div>
                        </div>
                    ) : dropdownLinks}
                    <MyNavLink to="/oferta" className="nav__item">Oferta</MyNavLink>
                    <MyNavLink to="/kontakt" className="nav__item">Kontakt</MyNavLink>
                    {!isDesktop && <Socials links={props.links}/>}
                </div>
            </div>
        </nav>
    );
}
 
export default Menu;