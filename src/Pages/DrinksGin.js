import Main from "../components/Main/Main";
import Drinks from "../components/Drinks/Drinks";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const DrinksGin = () => {
    
    useEffect(() => {
        document.title = 'Drinki z ginem - DrinkIt'
    }, [])
    
    return (
        <>
            <Header withoutSubtitle withoutButton title="Drinki z ginem" extraClass="header--gin"/>
            <Main>
                <Drinks withoutTitle />
                <Categories activeCategory="drinkizginem" />
            </Main>
        </>
    );
}
 
export default DrinksGin;