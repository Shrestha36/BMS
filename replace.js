// we take a string and replace the value with another value which we want to define.
const newString = (str, text1, text2) => {
    const replacedString = str.replace(text1, text2)
    return replacedString
}

export default newString;

