/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:
 */

let array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
document.write('<h1>Lista de meses</h1>')
for(i = 0; i < array.length; i++){
    document.write(`<ul>`);
    document.write(`<li>${array[i]}</li>`);
    document.write(`</ul>`);
}