import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Categories from './components/Main/Categories/Categories';


const App = () => {

 

  return (
    <div className="App">
      <Header />
      <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
      {/* <Menu /> */}
      {/* <Main /> */}
      <Main>
        <Categories />
      </Main>
      <Footer />
    </div>
  );
}


export default App;
