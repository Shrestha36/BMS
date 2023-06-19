//const calculateSum = (arr) => {
//    let sum = 0;
    // (let i = 0; i < arr.length; i++) {
 //     if (typeof arr[i] === 'number') {
 //       sum += arr[i];
  //    }
  //  }
   // return sum;
 // }
  //export default calculateSum

  const calculateSum = () => {
  const array = [1, 2, 3, 4, 5];

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum;
  }
  export default calculateSum // Output: 15
  