/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
 */
function perimetro(a, b){    
    let resultado = 2*(a + b);
    alert(`El perimetro de este rectangulo es: ${resultado}`);
}

    let a = parseInt(prompt(`Ingrese la medida de uno de los lados`));
    let b = parseInt(prompt(`Ingrese la medida del otro lado`));

    perimetro(a, b);