/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas.
 */
function detalleDeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log(`La cadena de texto solo contiene mayusculas`);
    }else if (cadena === cadena.toLowerCase()) {
        console.log(`La cadena de texto solo contiene minusculas`);
    }else{
        console.log(`La cadena de texto está formada por una mezcla de mayúsculas y minúsculas`)
    }
  }
  detalleDeCadena(`HOLA SOY UNA CADENA DE TEXTO`);
  detalleDeCadena('hola soy una cadena de texto');
  detalleDeCadena(`Hola soy una cadena de texto`);
  
