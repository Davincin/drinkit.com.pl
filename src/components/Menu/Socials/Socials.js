import './Socials.sass'
import SocialLink from '../../SocialLink/SocialLink'

const Socials = (props) => {

    const socialLinks = props.links.map(link => <SocialLink key={link.key} className="socials__link" onlyIcon={true} {...link}/>)

    return (
        <div className="socials">
            {socialLinks}
        </div>
    );
}
 
export default Socials;