
    const reverseArrayInPlace = (array) => {
        let leftIndex = 0;
        let rightIndex = array.length - 1;
      
        while (leftIndex < rightIndex) {
          // Swap elements
          const temp = array[leftIndex];
          array[leftIndex] = array[rightIndex];
          array[rightIndex] = temp;
      
          // Move indices towards the center
          leftIndex++;
          rightIndex--;
        }
      
        return array;
      }
      
export default reverseArrayInPlace