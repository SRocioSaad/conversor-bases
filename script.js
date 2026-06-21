
function decimalABinario(numeroDecimal) {
    // Caso especial si el usuario ingresa 0
    if (numeroDecimal === 0) return "0";

    let binario = "";
    let numero = numeroDecimal;

    // Mientras el número sea mayor a 0, seguimos dividiendo
    while (numero > 0) {
        let resto = numero % 2;     // % nos da el resto de la división (0 o 1)
        binario = resto + binario;  // Lo sumamos AL PRINCIPIO de la cadena para darlo vuelta
        numero = Math.floor(numero / 2); // Dividimos el número por 2 y redondeamos hacia abajo
    }

    return binario;
}

// 1. Enganchamos los elementos del HTML usando su ID
const inputDecimal = document.getElementById("inputDecimal");
const btnConvertir = document.getElementById("btnConvertir");
const resultadoTexto = document.getElementById("resultado");

// 2. Le decimos al botón que "escuche" el clic del usuario
btnConvertir.addEventListener("click", function() {
    // Tomamos el valor que el usuario escribió y lo pasamos a número entero
    let numeroIngresado = parseInt(inputDecimal.value);

    // Validación simple por si el usuario le da clic al botón estando vacío
    if (isNaN(numeroIngresado)) {
        resultadoTexto.innerText = "Por favor, ingresa un número válido.";
        return;
    }

    // Usamos tu función matemática
    let resultadoBinario = decimalABinario(numeroIngresado);

    // Mostramos el resultado final directamente en la pantalla
    resultadoTexto.innerText = `El número ${numeroIngresado} en binario es: ${resultadoBinario}`;
});

