function text_truncate(str, length, ending) {
    if (length == null) {
      length = 5;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
export default text_truncate ;
