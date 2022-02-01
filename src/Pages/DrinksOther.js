import Main from "../components/Main/Main";
import Drinks from "../components/Drinks/Drinks";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";

const DrinksOther = () => {
    return (
        <>
            <Header withoutSubtitle withoutButton title="Inne drinki" extraClass="header--other"/>
            <Main>
                <Drinks withoutTitle />
                <Categories activeCategory="innedrinki" />
            </Main>
        </>
    );
}
 
export default DrinksOther;