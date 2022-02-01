import '../Categories.sass'
import { Link } from 'react-router-dom';

const Category = props => {

    const backgroundImage = {backgroundImage: `url(${props.backgroundImage})`};
    
    return (
        <Link to={`/${props.URL}`} title={props.name} aria-label={props.name} className={`categories__category ${props.extraClass}`} style={backgroundImage} >
            <div className="categories__hero-category"></div>
            <h3 className="categories__category-title">{props.name}</h3>
        </Link>
    );
}
 
export default Category;