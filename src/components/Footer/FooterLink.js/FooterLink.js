import './FooterLink.sass'

const FooterLink = props => {
    return (
        <a 
            className="footer__link" 
            target="_blank" 
            rel="noreferrer"
            href={props.addres}
            title={props.title}
            aria-label={props.title}>
                <i className={props.iconName}></i>
                {props.name}
        </a>
    );
}
 
export default FooterLink;