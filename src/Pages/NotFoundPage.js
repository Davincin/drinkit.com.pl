import Main from '../components/Main/Main'
import NotFound from '../components/NotFound/NotFound';
import { useEffect } from 'react';

const NotFoundPage = () => {
    
    useEffect(() => {
        document.title = 'Nie znaleziono strony - DrinkIt'
    }, [])
    
    return (
        <Main>
            <NotFound />
        </Main>
    );
}
 
export default NotFoundPage;