//La búsqueda binaria funciona únicamente cuando el array está ordenado
const orderedArray = [1, 3, 5, 7, 9, 11];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length-1;

  let indexofResult = 0;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      indexofResult = mid;
      result = orderedArray[mid];
      break; //Elemento encontrado
    } else if (array[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  if (result !== 0) {
    return `Target ${result} found on index ${indexofResult}`;
  } else {
    return "Target not found"; //Elemento no encontrado
  };
}

console.log(binarySearch(orderedArray, 11));
console.log(binarySearch(orderedArray, 4));