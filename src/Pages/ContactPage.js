import Main from '../components/Main/Main'
import Contact from '../components/Contact/Contact';
import { useEffect } from 'react';

const ContactPage = () => {
    
    
    useEffect(() => {
        document.title = 'Kontakt - DrinkIt'
    }, [])
    
    return (
        <Main>
            <Contact />
        </Main>
    );
}
 
export default ContactPage;