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

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const localDate = new Date(reservation.date).toLocaleDateString(undefined, options);
    

  return (
    <section className="confirmation">
      <h1>Reservation Confirmation</h1>
      <div className="container">
          <div className="resdetails">
            <h3>Reservation Details</h3>
            <p><strong>Reservation # :</strong> {Math.floor(Math.random() * 9000 + 1000)}</p>
            <p> <strong>Date : </strong> {localDate}</p>
            <p> <strong>Time : </strong> {reservation.time}</p>
            <p> <strong># of Guests :</strong> {reservation.guestCount}</p>
            <p> <strong>Occasion : </strong> {reservation.occasion}</p>
            <Link to="/">
                <button className="btnPrimary">Home</button>
            </Link>
          </div>
      </div>
    </section>
  );
};
export default Confirmation;

