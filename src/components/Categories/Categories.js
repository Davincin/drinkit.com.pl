import Category from "./Category/Category";
import './Categories.sass'
import {useEffect, useState} from 'react'
import whiskyImage from '../../assets/images/whisky_480.jpg'
import ginImage from '../../assets/images/gin_480.jpg'
import wodkaImage from '../../assets/images/wodka_480.jpg'

const $categories = [
    {
        id: 1,
        name: 'Drinki z whisky',
        URL: 'drinkizwhisky',
        backgroundImage: whiskyImage
    },
    {
        id: 2,
        name: 'Drinki z ginem',
        URL: 'drinkizginem',
        backgroundImage: ginImage
    },
    {
        id: 3,
        name: 'Drinki z wódką',
        URL: 'drinkizwodka',
        backgroundImage: wodkaImage
    },
    {
        id: 4,
        name: 'Inne drinki',
        URL: 'innedrinki',
        backgroundImage: wodkaImage
    }
]

const Categories = props => {
    
    const {activeCategory} = props;
    
    const [extraClass, setExtraClass] = useState("");
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {

        setCategories($categories);
        (activeCategory && setExtraClass("categories__category--small"));

    }, [])

    const categoriesLinks = categories.filter(el => (el.URL !== activeCategory)).map(el => <Category key={el.id} {...el} extraClass={extraClass} />)
    
    return (
        <section className="categories">
            <div className="container">
                <h2 className="categories__title"><i className="fas fa-list"></i>Kategorie</h2>
                <div className="categories__row">
                    {categoriesLinks}
                </div>
            </div>
        </section>
    );
}
 
export default Categories;