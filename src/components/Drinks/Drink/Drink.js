import './Drink.sass'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingIcon from '../../UI/LoadingIcon';
import LoadingError from '../../UI/LoadingError/LoadingError';
import HomeButton from '../../UI/HomeButton/HomeButton';
const Drink = props => {

    const navigate = useNavigate()
    const location = useLocation()
    const [drink, setDrink] = useState({})
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false);
   
    const fetchDrink = async () => {
        try {
            
            const res = await axios.get(`https://drinkit-cc979-default-rtdb.firebaseio.com${location.pathname}.json`)
            
            if(res.data === null) {
                setLoadingError(true)
            } else {
                setDrink({...res.data})
            }

         } catch (ex) {
            setLoadingError(true)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        fetchDrink();
        
    }, [])

    useEffect(() => {
        document.title = `${drink.name} - DrinkIt`
    }, [drink])
    


    return (
        <article className="drink">
            <div className="container">
                {loading && <LoadingIcon/>}
                {(!loading && !loadingError) && (
                    <div className="drink__row">
                    <img src={drink.img} alt="#" className="drink__img" />
                    <div className="drink__info">
                        <h2 className="drink__title">{drink.name}</h2>
                        <ul className="drink__ingredients">
                            <h4 className="drink__ingredients-title">Składniki:</h4>
                            {drink.ingredients && drink.ingredients.map(el => <li key={el}>{el}</li>)}
                        </ul>
                        <ul className="drink__preparation">
                            <h4 className="drink__preparation-title">Sposób przygotowania:</h4>
                            {drink.preparation && drink.preparation.map(el => <li key={el}>{el}</li>)}
                        </ul>
                        <div className="drink__footer">
                            <Link to={`/${drink.categoryId}`} className="drink__category-link">{drink.categoryName}</Link>
                            <p className="drink__date">{drink.date}</p>
                        </div>
                    </div>
                </div>
                )}
                {loadingError && <LoadingError />}
            </div>
        </article>
    );
}
 
export default Drink;