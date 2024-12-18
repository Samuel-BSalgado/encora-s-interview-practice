//Contar la frecuencia de palabras en un texto
const textExample = "Hola mundo cruel y despiadado. Adios mundo cruel.";

function countWordFrequency(text) {
  const words = text.split(/\W+/);
  const frequency = {};

  for (let word of words) {
    word = word.toLowerCase();
    frequency[word] = (frequency[word] || 0) + 1; //JavaScript primero lee el valor a la derecha del signo =, y después el de la izquierda. Es decir, primero se obtiene el valor de la clave. Si es undefined (no existe en el objeto) toma el valor de 0, y suma 1 (porque es nueva palabra). Es después de este proceso que se guarda ese VALOR en la CLAVE (expresión a la izquierda del símbolo "="). Si ya existe en el objeto el valor de esa clave, entonces simplemente se suma 1 y se almacena en la CLAVE (expresión de la izquierda del s'imbolo "=").
  }

  return frequency;
}

console.log(countWordFrequency(textExample));