import './DrinkLink.sass'
import {Link} from 'react-router-dom'


const DrinkLink = props => {
    
   const {name, id, img} = props;
    
    return (
        <Link to={`/drinki/${id}`} className="drink-link">
            <img src={img} alt="#" className="drink-link__img" />
            <h2 className="drink-link__title">{name}</h2>
        </Link>
    );
}
 
export default DrinkLink;