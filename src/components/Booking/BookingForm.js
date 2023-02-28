import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingform.css';

const BookingForm = ({ availableTimes, getAvailableTimes, submit }) => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [occasion, setOccasion] = useState('');

  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time, guestCount, occasion };
    console.log(formData);
    submit(formData) ? navigate('/ConfirmationBooking') : clearForm();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
    getAvailableTimes(event.target.value);
  };

  const handleInputBlur = (event) => {
    const fieldName = event.target.name;
    setTouchedFields({ ...touchedFields, [fieldName]: true });
  // Validate the field only if it has been touched
    if (touchedFields[fieldName]) {
        const error = validateField(fieldName);
        setErrors({ ...errors, [fieldName]: error });
    }

  }

  const validateField = (fieldName) => {
    let error = null;
    switch (fieldName) {
      case "time":
        if (time === '') {
          error = "* Time is required";
        }
        break;
      case "guests":
        if (guestCount === '') {
          error = "* Guest Count is required";
        } else if (guestCount < 1 || guestCount > 10) {
          error = "* Guest Count should be between 1 and 10";
        }
        break;
      case "occasion":
        if (occasion === '')  {
          error = "* Occasion is required";
        } 
        break;
      default:
        break;
    }

    return error;
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
        <input type="date" id="date" name="date" value={date} onChange={handleDateChange} />
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur = {handleInputBlur}
        >
          <option value="">Please select the time</option>
          {availableTimes.map((time) => (
            <option key={time.value} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
        { touchedFields.time && errors.time && <div className='errorMsg'>{errors.time}</div> }
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="# of Guests"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          onBlur = {handleInputBlur}
        />
        { touchedFields.guests && errors.guests && <div className='errorMsg'>{errors.guests}</div> }
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur = {handleInputBlur}
        >
          <option value="">Select the Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        { touchedFields.occasion && errors.occasion && <div className='errorMsg'>{errors.occasion}</div> }
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
