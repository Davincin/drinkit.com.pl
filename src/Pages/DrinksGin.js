import Main from "../components/Main/Main";
import Drinks from "../components/Drinks/Drinks";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";

const DrinksGin = () => {
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