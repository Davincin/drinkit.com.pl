import Categories from "../components/Categories/Categories";
import Drinks from "../components/Drinks/Drinks"
import Main from "../components/Main/Main"
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <Drinks/>
                <Categories />
            </Main>
        </>
    );
}
 
export default Home;