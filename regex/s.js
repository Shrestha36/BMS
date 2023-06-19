const extractletterS = (str) => {
    var regex = /\bS\w+\b/gi;
    return str.match(regex);
  }
export default extractletterS