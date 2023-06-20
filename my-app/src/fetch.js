const fetchVal = (str) => {
    const regex = /^([-+])(\d+)$/;
    const match = str.match(regex);
    const symbol = match[1];
    const number = parseInt(match[2], 10);
    return { number, symbol };
  };
  export default fetchVal;