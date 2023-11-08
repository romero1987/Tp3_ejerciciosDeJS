/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6
 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
 y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:
*/

let dado1 = 0;
let dado2 = 0;
const suma = [];
let unicosElementos = [];
let vecesRepetidas = [];
let sumatoria = 0;
let contador = 1;
for(let i = 0; i < 50; i++){
dado1 = Math.floor(Math.random() * 6)+1;
dado2 = Math.floor(Math.random() * 6)+1;
sumatoria = dado1 + dado2;
suma.push(sumatoria);
}
suma.sort();
document.write(`<table><tbody>`);
document.write(`<tr>`)
document.write(`<th>Suma🎲🎲</th>`);
document.write(`<th>Apariciones</th>`)
document.write(`</tr>`)
for(let j = 0; j < suma.length; j++){
    if(suma[j+1] === suma[j]){
        contador++;
    }else{
        unicosElementos.push(suma[j]);
        document.write(`<tr>`);
        document.write()
        document.write(`<td>${suma[j]}</td>`);    
        vecesRepetidas.push(contador);
        document.write(`<td>${contador}</td>`);    
        document.write(`<tr>`);
        contador = 1;
    }
}
document.write(`</tbody></table>`)