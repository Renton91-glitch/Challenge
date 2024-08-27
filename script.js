// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonLimpiar = document.querySelector(".btn-limpiar");
const botonCopiar = document.querySelector(".btn-copiar");
const resultado = document.querySelector(".texto-result");
const textarea = document.querySelector(".text");

// Asociar eventos a los botones
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonLimpiar.addEventListener("click", limpiarCampos);
botonCopiar.addEventListener("click", copiarTexto);

// Función para encriptar el texto
function encriptar() {
    const texto = textarea.value;
    if (texto === "") {
        alert("Olvidaste el texto");
        return;
    }
    const textoEncriptado = encriptarTexto(texto);
    resultado.textContent = textoEncriptado;
    limpiarTextContainer(); // Limpiar la caja de texto después de encriptar
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = textarea.value;
    if (texto === "") {
        alert("Olvidaste el texto");
        return;
    }
    const textoDesencriptado = desencriptarTexto(texto);
    resultado.textContent = textoDesencriptado;
}

// Función para encriptar el texto
function encriptarTexto(mensaje) {
    return mensaje.replace(/a/g, "ai")
                  .replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(mensaje) {
    return mensaje.replace(/ufat/g, "u")
                  .replace(/ober/g, "o")
                  .replace(/imes/g, "i")
                  .replace(/enter/g, "e")
                  .replace(/ai/g, "a");
}

// Función para copiar el resultado al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => {
            alert("Texto copiado al portapapeles!");
            // Opcional: Puedes auto-llenar el textarea para facilitar el proceso
            textarea.value = resultado.textContent;
        })
        .catch(() => alert("Error al copiar el texto."));
}

// Función para limpiar los campos de texto y restablecer el estado inicial
function limpiarCampos() {
    textarea.value = ""; // Limpiar el textarea
    resultado.textContent = ""; // Limpiar el resultado
}

// Función para limpiar el área de texto después de la encriptación/desencriptación
function limpiarTextContainer() {
    textarea.value = "";
}
