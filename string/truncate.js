//Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

const textTruncate = (str, length = 5) => {

    const ending = '...';

    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    }

    return str;

};
export default textTruncate;
