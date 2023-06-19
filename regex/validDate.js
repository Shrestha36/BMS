const isValidDate = (dateString) =>{
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }
   
  const date1 = "2023-04-15";
  const date2 = "15-04-2023";
   
  export default isValidDate