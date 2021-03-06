import Categories from "../components/Categories/Categories";
import Drinks from "../components/Drinks/Drinks"
import Main from "../components/Main/Main"
import Header from "../components/Header/Header";
import { useEffect } from "react";

const Home = () => {
    
    
    useEffect(() => {
        document.title = 'DrinkIt - koktajle, impreza, smak.'
    }, [])

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