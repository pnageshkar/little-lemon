import { render, screen , fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
// import App from './App';
import BookingForm from './components/Booking/BookingForm';
import Booking from '../src/pages/Booking'
import { initializeTimes,updateTimes } from '../src/pages/Booking';

// const allTimes = [
//   { label: '15:00', value: '15' },
//   { label: '16:00', value: '16' },
//   { label: '17:00', value: '17' },
//   { label: '18:00', value: '18' },
//   { label: '19:00', value: '19' },
//   { label: '20:00', value: '20' },
//   { label: '21:00', value: '21' },
//   { label: '22:00', value: '22' },
// ];

test('Renders the BookingForm heading', () => {
  render(
    <Router>
      <Booking />
    </Router>
  );
  const headingElement = screen.getByText("Table Reservations");
  expect(headingElement).toBeInTheDocument();
});

test ('Get Initially Available Times', () => {
  render(
    <Router>
      <Booking />
    </Router>
  );
  expect(initializeTimes().length).toBeGreaterThan(0);

});

test ('Get updateTimes', () => {
  render(
    <Router>
      <Booking />
    </Router>
  );
  expect(updateTimes([],'2023-02-25').length).toBeGreaterThan(0);
})

// test("Reserve a table", () => {
//     const resDate = "02/02/2023";
//     const time = {label: '16:00', value: '16'};
//     const guestCount = 3;
//     const occasionCount = "Birthday";
    
//     const handleSubmit = jest.fn();
//     render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />);

    

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

//     expect(handleSubmit).toHaveBeenCalledWith({
//       date
//     });
//   });