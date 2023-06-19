//function findIndex(array, element) {
  //  for (let i = 0; i < array.length; i++) {
    //  if (array[i] === element) {
      //  return i;
      //}
    //}
    //return -1; // Element not found
  //}
//export default findIndex

const findIndex = (arr, element) => {
    const filteredArr = arr.filter(value => value === element);
    return arr.indexOf(filteredArr[0]);
  }
  export default findIndex