const disorderedArray = [10, 5, 8, 1, 2, 4, 67, 20, 9, 11];

function quick_sort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length-1];
  const left = [];
  const right = [];
  
  for (let i=0; i<array.length-1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

console.log(quick_sort(disorderedArray));