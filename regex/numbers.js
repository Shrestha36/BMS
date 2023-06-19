const extractNumbersFromString = (str) => {
    var regex = /\d+/g;
    return str.match(regex);
  }
export default extractNumbersFromString