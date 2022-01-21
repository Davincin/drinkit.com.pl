import Category from "./Category/Category";
import './Categories.sass'
import {useEffect, useState} from 'react'
import whiskyImage from '../../../assets/images/whisky_480.jpg'
import ginImage from '../../../assets/images/gin_480.jpg'
import wodkaImage from '../../../assets/images/wodka_480.jpg'



const $categories = [
    {
        id: 1,
        name: 'Drinki z whisky',
        href: '#',
        backgroundImage: whiskyImage
    },
    {
        id: 2,
        name: 'Drinki z ginem',
        href: '#',
        backgroundImage: ginImage
    },
    {
        id: 3,
        name: 'Drinki z wódką',
        href: '#',
        backgroundImage: wodkaImage
    },
    {
        id: 4,
        name: 'Inne drinki',
        href: '#',
        backgroundImage: wodkaImage
    }
]

const Categories = (props) => {
    
    
    
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
            setCategories($categories);
    }, [])

    const categoriesLinks = categories.map(item => <Category key={item.id} {...item} />)
    
    return (
        <section className="categories">
            <div className="categories__hero-shadow"></div>
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