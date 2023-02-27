import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingform.css';

const BookingForm = ({ availableTimes, getAvailableTimes, submit }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time, guestCount, occasion };
    // console.log(formData);
    submit(formData) ? navigate('/ConfirmationBooking') : clearForm();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
    getAvailableTimes(event.target.value);
  };

  const getIsFormValid = () => {
    if (date !== '') {
      if (time !== '') {
        if (guestCount !== '') {
          if (occasion !== '') {
            return true;
          }
        }
      }
    } else {
      return false;
    }
  };

  const clearForm = () => {
    setDate('');
    setTime('');
    setGuestCount('');
    setOccasion('Birthday');
  };

  return (
    <section className="booking">
      <h1>Table Reservations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time.value} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button
          type="submit"
          className="btnPrimary"
          disabled={!getIsFormValid()}
        >
          Make your reservation
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
