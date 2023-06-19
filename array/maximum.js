//const findMax = (array) => {
  //  let maxValue = Math.max(...array);
   // return maxValue
//}
//export default findMax

const findMax = (arr) => {
    // return Math.max(...arr)
    arr.sort((a, b) => (a > b ? -1 : 1))
    return arr[0]
}
export default findMax