"use strict";
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const calcularBtn = document.getElementById('calcular');
if (!valor1 || !valor2 || !operacion || !resultado || !calcularBtn) {
    console.error("No se pudieron encontrar todos los elementos necesarios en el DOM.");
}
else {
    console.log("Elementos obtenidos correctamente.");
}
function suma(x, y) {
    return x + y;
}
function resta(x, y) {
    return x - y;
}
function multiplicacion(x, y) {
    return x * y;
}
function division(x, y) {
    if (y === 0 || x === 0) {
        return "No se puede dividir entre 0";
    }
    return x / y;
}
function calcular() {
    if (valor1 && valor2 && operacion && resultado) {
        const num1 = parseFloat(valor1.value);
        const num2 = parseFloat(valor2.value);
        let res;
        switch (operacion.value) {
            case 'suma':
                res = suma(num1, num2);
                break;
            case 'resta':
                res = resta(num1, num2);
                break;
            case 'multiplicacion':
                res = multiplicacion(num1, num2);
                break;
            case 'division':
                res = division(num1, num2);
                break;
            default:
                res = 'Operación no válida';
        }
        resultado.innerText = res.toString();
    }
    else {
        console.error('No se pudieron obtener los valores de los inputs.');
    }
}
if (calcularBtn) {
    calcularBtn.addEventListener('click', calcular);
}
