import DrinkLink from "./DrinkLink/DrinkLink";
import './Drinks.sass'
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcon from "../UI/LoadingIcon";
import LoadingError from "../UI/LoadingError/LoadingError";


const Drinks = props => {

    const location = useLocation();
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false)

    const fetchDrinks = async () => {
        
        

        try {
            const res = await axios.get('https://drinkit-cc979-default-rtdb.firebaseio.com/drinki.json')
            const path = location.pathname
            
            if(path === '/') {
                const homeDrinks = [];
                
                for (const item in res.data) {
                    homeDrinks.push({...res.data[item]})
                }
                
                const newDrinks = homeDrinks.slice(0,6)
                setDrinks([...newDrinks])
            } else {
                const newDrinks = []

                for (const item in res.data) {
                    if (path.includes(res.data[item].categoryId)) {
                        newDrinks.push({...res.data[item]})
                    }
                    setDrinks([...newDrinks])
               } 
            }
        } catch (ex) {
            setLoadingError(true);
        }

        setLoading(false)
    }
    
    useEffect(() => {
        fetchDrinks();
        
    }, [])

    return (
        <section className="drinks scroll-fix" id="drinks">
            <div className="container">
                {(!props.withoutTitle) && (<h2 className="drinks__title"><i className="fas fa-glass-martini-alt"></i>Ostatnio dodane</h2>)}
                <div className="drinks__row">
                    {loading && <LoadingIcon />}
                    {(!loading && !loadingError) && (
                        drinks && drinks.map(drink => <DrinkLink key={drink.id} {...drink}/>)
                    )}
                    {loadingError && <LoadingError />}
                </div>
            </div>
        </section>
    );
}
 
export default Drinks;