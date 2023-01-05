import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Goal from './Components/Goal/Goal';
import Advantage from './Components/Advantage/Advantage';
import Faq from './Components/Faq/Faq';
import Principle from './Principle/Principle';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
        
        <Home></Home>
        <Goal></Goal>
        <Advantage></Advantage>
        <Principle></Principle>
        <Faq></Faq>
        
        <About></About>
        <Footer></Footer>
    </div>
  );
}

export default App;
