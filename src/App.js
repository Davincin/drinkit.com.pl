import './App.sass';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import DrinksWhisky from './Pages/DrinksWhisky';
import DrinksGin from './Pages/DrinksGin';
import DrinksWodka from './Pages/DrinksWodka';
import Home from './Pages/Home';
import DrinksOther from './Pages/DrinksOther'
import DrinkPage from './Pages/DrinkPage'
import OfferPage from './Pages/OfferPage'
import ContactPage from './Pages/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';


const App = () => {
  
  const links = [
    {
        key: 1,
        addres: 'https://www.facebook.com/drinkitcompl',
        title: 'DrinkIt na Facebooku',
        iconName: "fab fa-facebook-f",
        name: 'facebook.com/drinkit.com.pl'
    },
    {
        key: 2,
        addres: 'https://www.instagram.com/drinkit.com.pl',
        title: 'DrinkIt na Instagramie',
        iconName: "fab fa-instagram",
        name: 'instagram.com/drinkit.com.pl'
    },
    {
        key: 3,
        addres: 'https://twitter.com/drinkitcompl',
        title: 'DrinkIt na Twitterze',
        iconName: "fab fa-twitter",
        name: 'twitter.com/drinkitcompl'
      }
    ]
  
  return (
    <Router>
      <div className="App">
        <Menu links={links}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/drinkizwhisky" element={<DrinksWhisky />}/>
          <Route path="/drinkizginem" element={<DrinksGin />}/>
          <Route path="/drinkizwodka" element={<DrinksWodka />}/>
          <Route path="/innedrinki" element={<DrinksOther />}/>
          <Route path="/drinki/:drinkname" element={<DrinkPage />}/>
          <Route path="/oferta" element={<OfferPage />}/>
          <Route path="/kontakt" element={<ContactPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        <Footer links={links}/>
      </div>
    </Router>
  );
}

export default App;

