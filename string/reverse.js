//here the entire string will get reverse

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  export default reverseString;