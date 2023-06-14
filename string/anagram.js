//returns true if the specified property is a direct property of the object — even if the value is null or undefined .

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let count = {}
    for (let i = 0; i < str1.length; i++) {
        if (count.hasOwnProperty(str1[i])){ 
            count[str1[i]] += 1; 
        } else { 
            count[str1[i]] = 1; 
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (count.hasOwnProperty(str2[i])) { 
            count[str2[i]] -= 1; 
        }
        else return false;
        if (count[str2[i]] < 0) return false;
    }
    return true;
}
export default anagram












