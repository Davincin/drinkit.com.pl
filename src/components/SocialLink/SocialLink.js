const SocialLink = props => {
    return (
        <a 
            className={props.className}
            target="_blank" 
            rel="noreferrer"
            href={props.addres}
            title={props.title}
            aria-label={props.title}>
                <i className={props.iconName}></i>
                {(!props.onlyIcon) && props.name}
        </a>
    );
}
 
export default SocialLink;