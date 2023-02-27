import { useReducer } from "react";
import BookingForm from "../components/Booking/BookingForm"
import { fetchAPI,submitAPI } from "../utils/API";

// const allTimes = [
  
//   { label: '17:00', value: '17' },
//   { label: '18:00', value: '18' },
//   { label: '19:00', value: '19' },
//   { label: '20:00', value: '20' },
//   { label: '21:00', value: '21' },
//   { label: '22:00', value: '22' },
// ];

const updateTimes = (state,action) => {
  // console.log(action);
  // action = The Date selected by user in the Booking Form
  console.log(action);
  return fetchAPI(action);
}

const initializeTimes = () => {
  const avTimesToday = fetchAPI(new Date()); // Today's date (day of month)
  console.log(new Date());
 return avTimesToday;
}

const submitForm = (formData)=> {
  if  (submitAPI(formData)) {
    // Get the existing array of form data from local storage, or create a new empty array
    const formDataArray = JSON.parse(localStorage.getItem('ReservationData')) || [];
    // Add the new form data object to the array
    formDataArray.push(formData);
    // Save the updated array back to local storage
    localStorage.setItem('ReservationData', JSON.stringify(formDataArray));
    return true;
  } else {
    return false;
  }
  
}

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes,'',initializeTimes);
  return (
    <BookingForm availableTimes={availableTimes} getAvailableTimes={dispatch} submit= {submitForm}/>
  )
}

export default Booking

export {initializeTimes,updateTimes} ;