import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    const resData = localStorage.getItem('ReservationData');

    if (resData) {
      const parsedData = JSON.parse(resData);
      const latestReservation = parsedData[parsedData.length - 1];
      setReservation(latestReservation);
    }
  }, []);

  return (
    <section className="confirmation">
      <h1>Reservation Confirmation</h1>
      <div className="container">
          <div className="resdetails">
          <h3>Reservation Details:</h3>
          <p> Date : {reservation.date}</p>
          <p> Time : {reservation.time}</p>
          <p> # of Guests : {reservation.guestCount}</p>
          <p> Occasion : {reservation.occasion}</p>
          <Link to="/">
            <button className="btnPrimary">Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Confirmation;
