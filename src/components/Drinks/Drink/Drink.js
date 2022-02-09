import './Drink.sass'
import { Link } from 'react-router-dom'
import foto from '../../../assets/images/530_640.jpg';

const Drink = props => {

    const drink = {
        drinkId: 1,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryURL: 'drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg',
        drinkDate: "02/02/22"
    }

    const {shortVersion, drinkName, drinkURL} = props;
    const ingredients = ["składnik1", "składnik2", "składnik3", "składnik4"].map(el => <li key={el}>{el}</li>);
    

    return (
        <article className="drink">
            <div className="container">
                <div className="drink__row">
                    <img src={foto} alt="#" className="drink__img" />
                    <div className="drink__info">
                        <h2 className="drink__title">{drinkName}</h2>
                        <ul className="drink__ingredients">
                            <h4 className="drink__ingredients-title">Składniki:</h4>
                            {ingredients}
                        </ul>
                        <ul className="drink__preparation">
                            <h4 className="drink__preparation-title">Sposób przygotowania:</h4>
                            <li>Wszystkie składniki wstrząsamy w shakerze z lodem, następnie przelewamy do kieliszka.</li>
                        </ul>
                        <div className="drink__footer">
                            <Link to={`/${drink.drinkCategoryURL}`} className="drink__category-link">{drink.drinkCategory}</Link>
                            <p className="drink__date">{drink.drinkDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
 
export default Drink;