
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

// --- ZONA DE PRUEBAS ---
// Esto imprimirá el resultado en la consola del navegador para verificar que funcione
console.log("El número 25 en binario es:", decimalABinario(25)); // Debería dar 11001
console.log("El número 8 en binario es:", decimalABinario(8));   // Debería dar 1000

