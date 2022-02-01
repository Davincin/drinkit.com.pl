import Drink from "./Drink/Drink";
import './Drinks.sass'

const drinksData = [
    {
        drinkId: 1,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    },
    {
        drinkId: 2,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    },
    {
        drinkId: 3,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    },
    {
        drinkId: 4,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    },
    {
        drinkId: 5,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    },
    {
        drinkId: 6,
        drinkName: '530',
        drinkURL: '530',
        drinkCategory: "Drinki z ginem",
        drinkCategoryUrl: '/drinkizwhisky',
        drinkIngredients: ['skladnik1', 'skladnik2', 'skladnik3', 'skladnik4'],
        drinkPreparation: ['zrobic x y z no i tak dalej'],
        drinkImg: '../../assets/images/530_640.jpg'

    }
]

const Drinks = props => {

    const drinksToShow = drinksData.map(drink => <Drink key={drink.drinkId} shortVersion {...drink}/>)

    return (
        <section className="drinks">
            <div className="container">
                {(!props.withoutTitle) && (<h2 className="drinks__title"><i className="fas fa-glass-martini-alt"></i>Ostatnio dodane</h2>)}
                <div className="drinks__row">
                    {drinksToShow}
                </div>
            </div>
        </section>
    );
}
 
export default Drinks;