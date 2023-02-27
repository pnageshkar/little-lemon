import './App.css';
import  {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmationBooking from './pages/ConfirmationBooking';


function App() {
 
  return (
    <>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Booking" element = {<Booking/>} />
          <Route path = "/ConfirmationBooking" element = {<ConfirmationBooking/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
