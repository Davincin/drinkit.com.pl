import Main from "../components/Main/Main";
import Offer from "../components/Offer/Offer";
import { useEffect } from "react";

const OfferPage = () => {
    
    useEffect(() => {
        document.title = 'Oferta - DrinkIt'
    }, [])
    
    return (
        <Main>
            <Offer />
        </Main>
    );
}
 
export default OfferPage;