const valor1 = document.getElementById('valor1') as HTMLInputElement | null;
const valor2 = document.getElementById('valor2') as HTMLInputElement | null;
const operacion = document.getElementById('operacion') as HTMLSelectElement | null;
const resultado = document.getElementById('resultado') as HTMLSpanElement | null;
const calcularBtn = document.getElementById('calcular');

if (!valor1 || !valor2 || !operacion || !resultado || !calcularBtn) {
    console.error("No se pudieron encontrar todos los elementos necesarios en el DOM.");
} else {
    console.log("Elementos obtenidos correctamente.");
}

function suma(x: number, y: number): number {
    return x + y;
}

function resta(x: number, y: number): number {
    return x - y;
}

function multiplicacion(x: number, y: number): number {
    return x * y;
}

function division(x: number, y: number): number | string {
    if (y === 0 || x === 0) {
        return "No se puede dividir entre 0";
    }
    return x / y;
}


function calcular() {
    if (valor1 && valor2 && operacion && resultado) {
        const num1 = parseFloat(valor1.value);
        const num2 = parseFloat(valor2.value);
        let res: number | string;

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
    } else {
        console.error('No se pudieron obtener los valores de los inputs.');
    }
}

if (calcularBtn) {
    calcularBtn.addEventListener('click', calcular);
}
