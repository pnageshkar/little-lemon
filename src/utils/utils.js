
const formatDate = (date) => {
    const objDate = new Date(date);
    const year = objDate.getFullYear();
    const month = String(objDate.getMonth() + 1).padStart(2, '0');
    // const month = objDate.getMonth() ;
    const day = String(objDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`; //  format "YYYY-MM-DD"
}
  

  export default formatDate;