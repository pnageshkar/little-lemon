import './App.css';
import  {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmationBooking from './pages/ConfirmationBooking';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';
import NotFound from './components/NotFound/NotFound';


function App() {
 
  return (
    <>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Booking" element = {<Booking/>} />
          <Route path = "/ConfirmationBooking" element = {<ConfirmationBooking/>} />
          <Route path = "/About" element = {<About/>} />
          <Route path = "/Menu" element = {<Menu />} />
          <Route path = "/Order" element = {<Order />} />
          <Route path = "/Login" element = {<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
