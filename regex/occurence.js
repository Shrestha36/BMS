const replaceOccurence = (str,word, replacement) => {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    return str.replace(regex, replacement);
  }
  
  export default replaceOccurence