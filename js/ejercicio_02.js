/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

let ciudades = []; 
do{
ciudades.push(prompt(`ingrese las ciudades que desee`));

}while(confirm(`Desea seguir agregando ciudades?`)){

    document.write(`<br>El arreglo tiene ${ciudades.length} elementos`);

    document.write(`<ul>`)    

    document.write(`<li>Elemento de la 1era posicion es: ${ciudades[0]}</li>`);
    document.write(`<li>Elemento de la 3era posicion es: ${ciudades[2]}</li>`);
    document.write(`<li>Elemento de la ultima posicion es: ${ciudades[ciudades.length -1]}</li>`);

    ciudades.push(`Paris`);
    document.write(`<br><li>Elemento de la ultima posicion es: ${ciudades[ciudades.length -1]}</li>`);
    document.write(`<li>Elemento de la 2da posicion es: ${ciudades[1]}</li>`);

    ciudades[1] = `Barcelona`;
    document.write(`<br><li>Elemento de la 2da posicion es: ${ciudades[1]}</li>`);
    document.write(`</ul>`);
}

    document.write(`<h1>Arreglo de ciudades</h1>`);
    for(i = 0; i < ciudades.length; i++){
    document.write(`<ul>`);
    document.write(`<li>Elemento: ${ciudades[i]}</li>`);
    document.write(`</ul>`);
    }