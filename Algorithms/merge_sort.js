//Divide y conquista (merge sort)
//dividir: dividir el arreglo en mitades hasta llegar a tamaño 1
//conquistar: combinar esas mitades ordenándolas al volver a crear un array con el orden especificado

//Merge Sort sirve con arreglos desordenados pero NO con numeros repetidos

const arrayDesordnado = [100, 5, 26, 27, 30, 50, 7, 8, 9, 1];

function mergeSort(array) {
  if (array.length <= 1) { //Manejar el caso más simple, que el array length sea menor a 2
    return array;
  }

  const mid = Math.floor(array.length/2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return mergeSides(left, right);
}

function mergeSides(left, right) {
  let orderedArray = [];
  let i = 0;
  let j = 0;

  while (i<left.length && j<right.length) {
    if (left[i] < right[j]) {
      orderedArray.push(left[i]);
      i++;
    } else {
      orderedArray.push(right[j]);
      j++;
    }
  }
  return orderedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arrayDesordnado));