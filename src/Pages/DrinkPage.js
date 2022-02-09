
import Categories from "../components/Categories/Categories";
import Drink from "../components/Drinks/Drink/Drink";
import Main from "../components/Main/Main";

const DrinkPage = () => {

    return (
        <Main>
            <Drink drinkName="Test"/>
            <Categories />
        </Main>
    );
}
 
export default DrinkPage;