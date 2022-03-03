import Main from "../components/Main/Main";
import Drinks from "../components/Drinks/Drinks";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const DrinksWodka = () => {
    
    useEffect(() => {
        document.title = 'Drinki z wódką - DrinkIt'
    }, [])
    
    return (
        <>
            <Header withoutSubtitle withoutButton title="Drinki z wódką" extraClass="header--wodka"/>
            <Main>
                <Drinks withoutTitle />
                <Categories activeCategory="drinkizwodka" />
            </Main>
        </>
    );
}
 
export default DrinksWodka;