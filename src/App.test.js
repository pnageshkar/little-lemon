import { render, screen , fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import BookingForm from './components/Booking/BookingForm';
import Booking from '../src/pages/Booking'
import { initializeTimes,updateTimes } from '../src/pages/Booking';


describe ('Booking Form - Testing Reservation Time functionality', () => {
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
});

describe ('Booking Form Testing Form Submission', () => {
test('disables submit button when form is invalid', () => {
  const availableTimes = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
  ];
  const getAvailableTimes = jest.fn();
  const submit = jest.fn();
  render(<Router>
          <BookingForm
              availableTimes={availableTimes}
              getAvailableTimes={getAvailableTimes}
              submit={submit}
          /></Router>);
  const submitButton = screen.getByText('Make your reservation');
  expect(submitButton).toBeDisabled();

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2023-03-01' } });
  expect(submitButton).toBeDisabled();

  const timeSelect = screen.getByLabelText('Choose time');
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  expect(submitButton).toBeDisabled();

  const guestCountInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestCountInput, { target: { value: '2' } });
  expect(submitButton).toBeDisabled();

  const occasionSelect = screen.getByLabelText('Occasion');
  fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
  expect(submitButton).toBeEnabled();
});

test('calls the submit function with form data when submitted', () => {
  const availableTimes = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
  ];
  const getAvailableTimes = jest.fn();
  const submit = jest.fn();
  render(<Router>
          <BookingForm
              availableTimes={availableTimes}
              getAvailableTimes={getAvailableTimes}
              submit={submit}
          /></Router>);
  const submitButton = screen.getByText('Make your reservation');

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2023-03-01' } });

  const timeSelect = screen.getByLabelText('Choose time');
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  const guestCountInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestCountInput, { target: { value: '2' } });

  const occasionSelect = screen.getByLabelText('Occasion');
  fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

  fireEvent.click(submitButton);

  expect(submit).toHaveBeenCalledWith({
    date: '2023-03-01',
    time: '18:00',
    guestCount: '2',
    occasion: 'Anniversary',
  });
});
});

describe('BookingForm - Validate Inputs', () => {
  it('should allow users to input a date', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(<Router>
            <BookingForm
                availableTimes={availableTimes}
                getAvailableTimes={getAvailableTimes}
                submit={submit}
            /></Router>);
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2022-03-01' } });
    expect(dateInput.value).toBe('2022-03-01');
  });

  it('should allow users to input a time', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
          <Router>
            <BookingForm
                availableTimes={availableTimes}
                getAvailableTimes={getAvailableTimes}
                submit={submit}
            /></Router>);
    const timeInput = screen.getByLabelText('Choose time');
    fireEvent.change(timeInput, { target: { value: '17:00' } });
    expect(timeInput.value).toBe('17:00');
  });

  it('should allow users to input the number of guests', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
      <Router>
        <BookingForm
            availableTimes={availableTimes}
            getAvailableTimes={getAvailableTimes}
            submit={submit}
        /></Router>);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');
  });

  it('should allow users to select an occasion', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
      <Router>
        <BookingForm
            availableTimes={availableTimes}
            getAvailableTimes={getAvailableTimes}
            submit={submit}
        /></Router>);
    const occasionInput = screen.getByLabelText('Occasion');
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
    expect(occasionInput.value).toBe('Birthday');
  });

  it('displays error message for invalid time input', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
      <Router>
        <BookingForm
            availableTimes={availableTimes}
            getAvailableTimes={getAvailableTimes}
            submit={submit}
        /></Router>);
    const timeInput = screen.getByLabelText('Choose time');
    fireEvent.change(timeInput, { target: { value: '' } });
    fireEvent.blur(timeInput);
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    
  });

  it('displays error message for invalid guest count input', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
      <Router>
        <BookingForm
            availableTimes={availableTimes}
            getAvailableTimes={getAvailableTimes}
            submit={submit}
        /></Router>);
    const guestCountInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestCountInput, { target: { value: '12' } });
    fireEvent.blur(guestCountInput);
    expect(screen.getByText("* Guest Count has to be between 1 and 10")).toBeInTheDocument();
  });

  it('displays error message for invalid occasion input', () => {
    const availableTimes = [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
    ];
    const getAvailableTimes = jest.fn();
    const submit = jest.fn();
    render(
      <Router>
        <BookingForm
            availableTimes={availableTimes}
            getAvailableTimes={getAvailableTimes}
            submit={submit}
        /></Router>);
    const occasionInput = screen.getByLabelText('Occasion');
    fireEvent.change(occasionInput, { target: { value: '' } });
    fireEvent.blur(occasionInput);
    expect(screen.getByText("* Occasion is required")).toBeInTheDocument();
  });
});