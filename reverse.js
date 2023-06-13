function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  
export default reverse1;