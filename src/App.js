import './App.sass';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Categories from './components/Main/Categories/Categories';


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
    <div className="App">
      <Menu links={links}/>
      <Header />
      <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
      
      {/* <Main /> */}
      <Main>
        <Categories />
      </Main>
      <Footer links={links}/>
    </div>
  );
}


export default App;
