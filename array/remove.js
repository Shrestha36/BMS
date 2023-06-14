// program to remove item from an array

const removeItemFromArray = (array, n) => {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
export default removeItemFromArray