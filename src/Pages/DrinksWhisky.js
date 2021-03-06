import Main from "../components/Main/Main";
import Drinks from "../components/Drinks/Drinks";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const DrinksWhisky = () => {
    
    useEffect(() => {
        document.title = 'Drinki z whisky - DrinkIt'
    }, [])
    
    return (
        <>
            <Header withoutSubtitle withoutButton title="Drinki z whisky" extraClass="header--whisky"/>
            <Main>
                <Drinks withoutTitle drinksTitle="Drinki z whisky"/>
                <Categories activeCategory="drinkizwhisky"/>
            </Main>
        </>
    );
}
 
export default DrinksWhisky;