const extractHashtags = (str) => {
    var regex = /#\w+/g;
    return str.match(regex);
  }
  export default extractHashtags