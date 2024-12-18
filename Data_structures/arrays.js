//Recorrer array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rotar(arr) {
  arr.forEach(element => { //forEach imprime el dato del array
    console.log(element);
  });

  for (element in arr) { //for in imprime el index del array
    console.log(element);
  }

  for (element of arr) { //for of imprime el dato del array
    console.log(element);
  }
}

rotar(array);

//Voltear el array (orden inverso)
function voltear(arr) {
  let invertedArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    invertedArr.push(arr[i]);
  }
  return invertedArr;
}
console.log(voltear(array));

//Voltear por mitades (partir a la mitad y voltear esas mitades)
function slice_and_flip(arr) {
  const mid = Math.floor((arr.length) / 2);
  const left = arr.slice(0, mid);
  const rigth = arr.slice(mid);
  
  let newArray = [];
  for (element of rigth) {
    newArray.push(element);
  }

  for (element of left) {
    newArray.push(element);
  }
  return newArray;
}

console.log(slice_and_flip(array));