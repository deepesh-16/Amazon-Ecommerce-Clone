import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './componets/Navbar.js';
import Scroll from './componets/Scroll';
import Cards from './componets/Cards';
import Footer from './componets/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Scroll/>
     <Cards/>
     <Footer/>
    </div>
      
  );
}

export default App;
