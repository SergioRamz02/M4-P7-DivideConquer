//Encontrar el máximo de un elemento
function findMax(arr) {
    // Agregar la condición del caso base
    if (arr.length <=1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2); /* calcular el punto medio */
    const left = arr.slice(0,mid); /* obtener la primera mitad */
    const right = arr.slice(mid); /* obtener la segunda mitad */

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left); /* llamada recursiva */
    const rightMax = findMax(right); /* llamada recursiva */

    // Combinar las soluciones comparando los máximos
    if(leftMax > rightMax){
       return leftMax;
    }else{
       return rightMax;
   }
    
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10