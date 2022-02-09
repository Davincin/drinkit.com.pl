import './DrinkLink.sass'
import {Link} from 'react-router-dom'
import drinkImg from '../../../assets/images/530_640.jpg'

const DrinkLink = props => {
    
   
    const {drinkName, drinkURL} = props;
    
    return (
        <Link to={`/drink/${drinkURL}`} className="drink-link">
            <img src={drinkImg} alt="#" className="drink-link__img" />
            <h2 className="drink-link__title">{drinkName}</h2>
        </Link>
    );
}
 
export default DrinkLink;