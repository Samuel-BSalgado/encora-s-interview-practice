const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function example(arr) {
  for (let number1 of arr) { //O(n)
    for (let number2 of arr) { //O(n)
      console.log(number1, number2); //O(1);
    }
  }
}
//Total: O(n^2)
example(array);