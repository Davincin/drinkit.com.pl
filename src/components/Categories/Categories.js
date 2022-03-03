import Category from "./Category/Category";
import './Categories.sass'
import {useEffect, useState} from 'react'
import axios from "axios";
import LoadingIcon from "../UI/LoadingIcon";
import LoadingError from "../UI/LoadingError/LoadingError";


const Categories = props => {
    
    const {activeCategory} = props;
    
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [extraClass, setExtraClass] = useState("");
    const [categories, setCategories] = useState([]);
    

    const fetchCategories = async () => {
        
        
        try {
            
            const res = await axios.get('https://drinkit-cc979-default-rtdb.firebaseio.com/kategorie.json')
            const newCategories = [];
                
                for (const item in res.data) {
                    newCategories.push({...res.data[item]})
                }
                
                setCategories(newCategories);
                setLoadingError(false);
                
    
            } catch (x) {
                setLoadingError(true);
            }
        setLoading(false);

       
    }
    
    useEffect(() => {
        
        (activeCategory && setExtraClass("categories__category--small"));
        fetchCategories();

    }, [])

    const categoriesLinks = categories.filter(el => (el.URL !== activeCategory)).map(el => <Category key={el.id} {...el} extraClass={extraClass} />)
    
    return (
        <section className="categories">
            <div className="container">
                <h2 className="categories__title"><i className="fas fa-list"></i>Kategorie</h2>
                <div className="categories__row">
                    {(loading && !loadingError) ? <LoadingIcon/> : categoriesLinks}
                    {loadingError && (<LoadingError />)}
                </div>
            </div>
        </section>
    );
}
 
export default Categories;