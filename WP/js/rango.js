// Obtiene el input tipo range (slider) por su id "rango"
const rango = document.getElementById("rango");

// Obtiene el elemento donde se va a mostrar el valor del rango
const valor = document.getElementById("valorRango");

// Función que formatea un número como colones costarricenses (CRC)
function formatearCRC(numero) {
    // Convierte el número a entero, lo formatea con separadores de miles
    // y le agrega el símbolo ₡ al inicio
    return "₡" + parseInt(numero).toLocaleString("es-CR");
}

// Asigna el valor inicial formateado cuando carga la página
valor.textContent = formatearCRC(rango.value);

// Escucha el evento "input" (cuando el usuario mueve el slider)
rango.addEventListener("input", () => {
    
    // Actualiza el texto mostrado con el nuevo valor formateado
    valor.textContent = formatearCRC(rango.value);
});