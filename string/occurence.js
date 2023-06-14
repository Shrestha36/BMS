// program to check the number of occurrence of a character

const countOccurrences = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }
  export default countOccurrences;