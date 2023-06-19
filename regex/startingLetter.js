const extractstartingLetter = (str,ch) => {
    const regex = new RegExp(`\\b${ch}\\w*`, "g");
    return str.match(regex);
  }
  export default extractstartingLetter