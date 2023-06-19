//const removeDuplicates = (arr) => {
  //  return [...new Set(arr)];
  //}
  //export default removeDuplicates

  const removeDuplicates=(array) =>{
    return array.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  export default removeDuplicates