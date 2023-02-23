import './App.css';
import  {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Booking" element = {<Booking/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
