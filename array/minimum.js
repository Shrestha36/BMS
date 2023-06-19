//const findMin = (array) => {
  //  let minValue = Math.min(...array);
    //return minValue
//}
//export default findMin

const findMin = (arr) => {
    // return Math.min(...arr)
    arr.sort((a, b) => (a < b ? -1 : 1))
    return arr[0]
}
export default findMin