import './Footer.sass'
import FooterLink from './FooterLink.js/FooterLink';

const Footer = () => {

    const links = [
        {
            key: 1,
            addres: 'https://www.facebook.com/drinkitcompl',
            title: 'DrinkIt na Facebooku',
            iconName: "fab fa-facebook-f",
            name: 'facebook.com/drinkit.com.pl'
        },
        {
            key: 2,
            addres: 'https://www.instagram.com/drinkit.com.pl',
            title: 'DrinkIt na Instagramie',
            iconName: "fab fa-instagram",
            name: 'instagram.com/drinkit.com.pl'
        },
        {
            key: 3,
            addres: 'https://twitter.com/drinkitcompl',
            title: 'DrinkIt na Twitterze',
            iconName: "fab fa-twitter",
            name: 'twitter.com/drinkitcompl'
        }
    ]

    
    const year = new Date().getFullYear();

    const footerLinks = links.map(link => <FooterLink key={link.key} {...link}/>)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__box">
                        <div className="footer__logo">Drink<span className="gold-color">It</span></div>
                        <p className="footer__contact-item"><i className="fas fa-envelope"></i> kontakt@drinkit.com.pl</p>
                        <p className="footer__contact-item"><i className="fas fa-mobile-alt"></i> 697 356 527</p>
                    </div>
                    <div className="footer__box">
                        {footerLinks}
                    </div>
                    <div className="footer__box">
                        <button className="footer__up-btn" onClick={() => {window.scrollTo(0,0)}}>
                            <i className="fas fa-angle-double-up"></i>
                            <p >Do góry</p>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="footer__text">
                    <p>Znaki towarowe i nazwy innych firm zostały użyte wyłącznie w celu informacyjnym.</p>
                    <p>Drinkit.com.pl © {year} - Wszelkie prawa zastrzeżone.</p>
                </div>
        </footer>
    );
}
 
export default Footer;