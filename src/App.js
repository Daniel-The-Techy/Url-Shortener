import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Shorten from './Component/Links/Shortenlinks'
import Stat from './Component/Stat/Stat';
import Boost  from './Component/Boost/Boost';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <div className='bg'>
      <Navbar/>
       <Hero/>
       <Shorten/>
     </div>
     <Stat/>
     <Boost/>
     <Footer/>
    </>
  );
}

export default App;
