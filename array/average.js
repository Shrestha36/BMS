const calculateAverage = (arr, average) => {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (average) {
        return sum / arr.length
    }

    return sum;
}
export default (calculateAverage)
  //tobefix