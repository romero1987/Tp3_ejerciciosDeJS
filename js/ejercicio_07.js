/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function multiplicar(a){
    if(isNaN(a)){
        alert(`Debe ingresar un numero`);
    }else{   
        document.write(`<h1>La tabla del ${a} es:</h1>`); 
    for(i = 1; i <= 10; i++){
        let resultado = a * i;
        document.write(`${a} x ${i} = ${resultado}<br>`);
    }
}
}

let a = parseInt(prompt(`Ingrese el numero que va a multiplicar`));

multiplicar(a);