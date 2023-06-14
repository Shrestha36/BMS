//it checks if the reversed string is equal to the original string. 

const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Check if the reversed string is equal to the original string
    return str === str.split('').reverse().join('');
  }
  
  export default isPalindrome;