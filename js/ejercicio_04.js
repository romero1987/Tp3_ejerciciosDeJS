/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. */

function parImpar(a){
    if(a %2 === 0){
        document.write(`El numero ${a} es par`);
    } else{
        document.write(`El numero ${a} es impar`)
    }
    return 0;
}

parImpar(7);